-- CreateEnum
CREATE TYPE "EventMode" AS ENUM ('on_site', 'virtual', 'hybrid');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "eventMode" "EventMode" NOT NULL DEFAULT 'on_site',
ADD COLUMN     "participationLink" TEXT;
