'use server';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

declare global {
  // allow hot-reload safe prisma on dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma: PrismaClient = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

type Query = {
  page?: string;
  pageSize?: string;
  q?: string;
  category?: string;
  publishStatus?: string;
  order?: 'asc' | 'desc';
};

/**
 * GET /api/faq
 * - supports pagination: ?page=1&pageSize=20
 * - optional filters: q (search in question/answer as JSON string), category, publishStatus
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries()) as Query;

    const page = Math.max(1, Number(params.page ?? 1));
    const pageSize = Math.min(100, Math.max(1, Number(params.pageSize ?? 25)));
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const order: 'asc' | 'desc' = params.order === 'asc' ? 'asc' : 'desc';

    const where: any = {};

    if (params.category) {
      where.category = params.category;
    }
    if (params.publishStatus) {
      where.publishStatus = params.publishStatus;
    }

    // simple text search: checks JSON fields converted to text (Postgres JSON -> text) via Prisma's contains on stringified value
    // We attempt to search in the JSON by stringifying.
    if (params.q) {
      const q = params.q.trim();
      if (q.length > 0) {
        // Because question/answer are Json columns, we stringify them in-memory for matching.
        // Prisma doesn't support JSON full-text across dialects; this is a simple contains search on the textual representation.
        where.OR = [
          {
            // cast to string search via contains on JSON-stringified value
            // This is done by searching for the substring in the JSON string representation stored by Prisma client.
            // Note: For large-scale production, prefer a proper full-text solution.
            question: {
              // @ts-ignore - Prisma's Json filter accepts equals/select depending on provider; fallback to contains on stringified JSON
              // We'll do a client-side filter fallback if the provider cannot run this query efficiently.
              contains: q,
            },
          },
          {
            answer: {
              // @ts-ignore
              contains: q,
            },
          },
        ];
      }
    }

    // Run count and list queries. If the JSON contains filter isn't supported by your DB/Prisma, the WHERE above may be ignored; in that case we fallback to client-side filtering below.
    const [total, faqs] = await Promise.all([
      prisma.fAQ.count({ where }),
      prisma.fAQ.findMany({
        where,
        orderBy: { createdAt: order },
        skip,
        take,
      }),
    ]);

    // If 'q' was provided and the DB didn't support JSON contains properly, ensure items actually match by doing a client-side filter:
    let finalFaqs = faqs;
    if (params.q && params.q.trim()) {
      const q = params.q.trim().toLowerCase();
      finalFaqs = faqs.filter((f) => {
        try {
          const qStr = JSON.stringify(f.question ?? '');
          const aStr = JSON.stringify(f.answer ?? '');
          return qStr.toLowerCase().includes(q) || aStr.toLowerCase().includes(q);
        } catch {
          return false;
        }
      });
    }

    return NextResponse.json({
      data: finalFaqs,
      meta: {
        total,
        page,
        pageSize,
      },
    });
  } catch (err: any) {
    console.error('GET /api/faq error', err);
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}

/**
 * POST /api/faq
 * - Creates a new FAQ
 * - Expects JSON body with: question (object | string), answer (object | string)
 * - Optional: category, publishStatus, createdById, updatedById, approvedById
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { question, answer, category, publishStatus, createdById, updatedById, approvedById } =
      body ?? {};

    if (!question) {
      return NextResponse.json({ error: 'question is required' }, { status: 400 });
    }
    if (!answer) {
      return NextResponse.json({ error: 'answer is required' }, { status: 400 });
    }
    if (!createdById) {
      return NextResponse.json({ error: 'createdById is required' }, { status: 400 });
    }

    // Create
    const created = await prisma.fAQ.create({
      data: {
        question: question, // Prisma Json accepts raw JS object or string
        answer: answer,
        category: category ?? undefined,
        publishStatus: publishStatus ?? undefined,
        createdById,
        updatedById: updatedById ?? createdById,
        approvedById: approvedById ?? createdById,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    console.error('POST /api/faq error', err);
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
  }
}
