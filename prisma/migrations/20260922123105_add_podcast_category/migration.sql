-- CreateEnum
CREATE TYPE "PodcastCategory" AS ENUM ('GNTL', 'ClassroomOnPhone');

-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "category" "PodcastCategory" NOT NULL DEFAULT 'GNTL';
