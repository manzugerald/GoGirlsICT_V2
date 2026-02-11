'use server';

import { NextResponse } from 'next/server';
import prisma from '@/db/prisma';

/**
 * GET handler (unchanged)
 */
export async function GET() {
  try {
    const faqs = await prisma.FAQ.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(faqs, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('GET /api/faq error', err);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch FAQs' }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }
}

/**
 * Improved POST handler
 *
 * - Returns detailed server error messages (so client sees why creation failed).
 * - Ensures required user IDs are provided (your Prisma model had non-nullable
 *   createdById / updatedById / approvedById). If you don't want to require them,
 *   make those fields optional in the Prisma schema instead.
 * - Normalizes simple string payloads where possible and accepts JSON objects for
 *   `question` and `answer`.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      question,
      answer,
      category = 'general',
      publishStatus = 'draft',
      createdById,
      updatedById,
      approvedById,
    } = body ?? {};

    // Validation: require question + answer
    if (!question || !answer) {
      return new NextResponse(JSON.stringify({ error: 'question and answer are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validation: createdById required by Prisma schema
    if (!createdById) {
      return new NextResponse(
        JSON.stringify({
          error:
            'createdById is required. Provide the current user id in the payload (createdById).',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Use provided updatedById/approvedById or default them to createdById for now
    const safeUpdatedById = updatedById ?? createdById;
    const safeApprovedById = approvedById ?? createdById;

    // Create record
    const created = await prisma.FAQ.create({
      data: {
        // question/answer are JSON columns in Prisma; store whatever JSON object/string the client sent.
        question,
        answer,
        category,
        publishStatus,
        createdById: String(createdById),
        updatedById: String(safeUpdatedById),
        approvedById: String(safeApprovedById),
      },
    });

    return new NextResponse(JSON.stringify(created), {
      status: 201,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('POST /api/faq error', err);
    // Return the real error message (safe for dev). In production you might want to mask details.
    const message = err?.message ?? 'Failed to create FAQ';
    return new NextResponse(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  }
}
