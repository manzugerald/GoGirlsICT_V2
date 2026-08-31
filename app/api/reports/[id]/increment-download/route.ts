import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid Report ID" }, { status: 400 })
    }
    
    const report = await prisma.report.update({
      where: { id },
      data: { downloadCount: { increment: 1 } },
      select: { downloadCount: true },
    });
    return NextResponse.json({ downloadCount: report.downloadCount });
  } catch {
    return NextResponse.json({ error: "Failed to increment download count" }, { status: 500 });
  }
}