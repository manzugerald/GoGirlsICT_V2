/*
  Warnings:

  - The `hostType` column on the `RadioTalkshow` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "HostType" AS ENUM ('beneficiary', 'admin', 'guest');

-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "eventId" INTEGER,
ADD COLUMN     "hostBeneficiaryId" TEXT,
ADD COLUMN     "hostFirstName" TEXT,
ADD COLUMN     "hostLastName" TEXT,
ADD COLUMN     "hostType" "HostType",
ADD COLUMN     "hostUserId" TEXT,
ADD COLUMN     "institutionId" TEXT,
ADD COLUMN     "projectId" INTEGER,
ADD COLUMN     "reportId" INTEGER,
ADD COLUMN     "talkshowId" INTEGER;

-- AlterTable
ALTER TABLE "RadioTalkshow" DROP COLUMN "hostType",
ADD COLUMN     "hostType" "HostType";

-- DropEnum
DROP TYPE "TalkshowHostType";

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_hostBeneficiaryId_fkey" FOREIGN KEY ("hostBeneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_hostUserId_fkey" FOREIGN KEY ("hostUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Podcast" ADD CONSTRAINT "Podcast_talkshowId_fkey" FOREIGN KEY ("talkshowId") REFERENCES "RadioTalkshow"("id") ON DELETE SET NULL ON UPDATE CASCADE;
