import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const podcastId = parseInt(id, 10);
    if (isNaN(podcastId)) {
      return NextResponse.json({ error: "Invalid Podcast ID" }, { status: 400 });
    }
    const podcast = await prisma.podcast.update({
      where: { id: podcastId },
      data: { accessCount: { increment: 1 } },
      select: { accessCount: true },
    });
    return NextResponse.json({ accessCount: podcast.accessCount });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ error: "Podcast not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Failed to increment play count" }, { status: 500 });
  }
}
