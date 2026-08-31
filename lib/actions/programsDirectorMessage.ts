// Data Fetching script
import { prisma } from "@/db/prisma";

export async function getAllMessages() {
  return await prisma.message.findMany({
    where: {
        messageStatus: 'published'
      },
    orderBy: {
      createdAt: 'asc'
    },
    select: {
      name: true,
      title: true,
      content: true,
      nameImageUrl: true,
    }
    });
}