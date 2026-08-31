import { NextResponse } from 'next/server';
import prisma from '@/db/prisma';

/**
 * NOTE
 * Next.js dynamic route `params` in the app router can be a Promise-like value in some runtimes.
 * Awaiting `params` before accessing its properties is the recommended pattern to avoid:
 * "params should be awaited before using its properties"
 *
 * Awaiting a non-Promise value is a no-op, so `const { id } = await params` works whether
 * `params` is already resolved or is a Promise.
 */

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const faq = await prisma.fAQ.findUnique({
      where: { id: Number(id) },
    });

    if (!faq) {
      return NextResponse.json({ error: 'FAQ not found' }, { 
        status: 404,
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
      });
    }

    return NextResponse.json(faq, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('GET /api/faq/[id] error:', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Server error' }, { 
      status: 500,
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updated = await prisma.fAQ.update({
      where: { id: Number(id) },
      data: {
        question: body.question ?? undefined,
        answer: body.answer ?? undefined,
        category: body.category ?? undefined,
        publishStatus: body.publishStatus ?? undefined,
        // add other fields as needed
      },
    });

    return NextResponse.json(updated, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (err) {
    console.error('PUT /api/faq/[id] error:', err);
    // If record not found prisma will throw; return 404 for that case
    const msg = err instanceof Error ? err.message : 'Server error';
    const status = /Record to update not found/i.test(msg) ? 404 : 500;
    return NextResponse.json({ error: msg }, { 
      status,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.fAQ.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true }, {
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  } catch (err) {
    console.error('DELETE /api/faq/[id] error:', err);
    const msg = err instanceof Error ? err.message : 'Server error';
    const status = /Record to delete does not exist/i.test(msg) ? 404 : 500;
    return NextResponse.json({ error: msg }, { 
      status,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    });
  }
}
