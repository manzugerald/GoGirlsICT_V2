import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const reportId = parseInt(id, 10);
    if (isNaN(reportId)) {
      return NextResponse.json({ error: "Invalid Report ID" }, { status: 400 });
    }
    const report = await prisma.report.update({
      where: { id: reportId },
      data: { accessCount: { increment: 1 } },
      select: { accessCount: true },
    });
    return NextResponse.json({ accessCount: report.accessCount });
  } catch (error) {
    // Fallback: check error.code directly if unable to use the PrismaClientKnownRequestError type
    if (
      error && typeof error === 'object' && 'code' in error && error.code === 'P2025'
    ) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Failed to increment access count" }, { status: 500 });
  }
}