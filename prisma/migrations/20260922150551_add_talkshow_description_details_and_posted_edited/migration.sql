-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "editedAt" TIMESTAMP(3),
ADD COLUMN     "postedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "RadioTalkshow" ADD COLUMN     "description" JSONB,
ADD COLUMN     "details" JSONB,
ADD COLUMN     "editedAt" TIMESTAMP(3),
ADD COLUMN     "postedAt" TIMESTAMP(3);
