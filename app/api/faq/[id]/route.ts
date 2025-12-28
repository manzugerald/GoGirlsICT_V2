'use server';

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}
const prisma: PrismaClient = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

/**
 * GET /api/faq/[id]
 * PATCH /api/faq/[id]
 * DELETE /api/faq/[id]
 *
 * id is the FAQ numeric id
 */

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const faq = await prisma.fAQ.findUnique({
      where: { id },
    });

    if (!faq) return NextResponse.json({ error: 'FAQ not found' }, { status: 404 });
    return NextResponse.json(faq);
  } catch (err: any) {
    console.error('GET /api/faq/[id] error', err);
    return NextResponse.json({ error: 'Failed to fetch FAQ' }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const body = await request.json().catch(() => ({}));
    const { question, answer, category, publishStatus, updatedById, approvedById } = body ?? {};

    const data: any = {};
    if (question !== undefined) data.question = question;
    if (answer !== undefined) data.answer = answer;
    if (category !== undefined) data.category = category;
    if (publishStatus !== undefined) data.publishStatus = publishStatus;
    if (updatedById !== undefined) data.updatedById = updatedById;
    if (approvedById !== undefined) data.approvedById = approvedById;

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: 'No updatable fields provided' }, { status: 400 });
    }

    const updated = await prisma.fAQ.update({
      where: { id },
      data,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error('PATCH /api/faq/[id] error', err);
    // handle record not found
    if (err?.code === 'P2025') {
      return NextResponse.json({ error: 'FAQ not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update FAQ' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    // Soft delete vs hard delete: schema has no deletedAt for FAQ. We'll perform hard delete.
    await prisma.fAQ.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 204 });
  } catch (err: any) {
    console.error('DELETE /api/faq/[id] error', err);
    if (err?.code === 'P2025') {
      return NextResponse.json({ error: 'FAQ not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete FAQ' }, { status: 500 });
  }
}
