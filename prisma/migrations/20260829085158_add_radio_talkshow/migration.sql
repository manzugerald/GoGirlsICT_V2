-- CreateEnum
CREATE TYPE "TalkshowHostType" AS ENUM ('beneficiary', 'admin', 'guest');

-- CreateTable
CREATE TABLE "BeneficiaryPodcast" (
    "id" TEXT NOT NULL,
    "beneficiaryId" TEXT NOT NULL,
    "podcastId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BeneficiaryPodcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeneficiaryTalkshow" (
    "id" TEXT NOT NULL,
    "beneficiaryId" TEXT NOT NULL,
    "talkshowId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BeneficiaryTalkshow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RadioTalkshow" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "poster" TEXT,
    "publishStatus" "PublishStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT,
    "approvedById" TEXT,
    "projectId" INTEGER,
    "eventId" INTEGER,
    "reportId" INTEGER,
    "institutionId" TEXT,
    "hostType" "TalkshowHostType",
    "hostBeneficiaryId" TEXT,
    "hostUserId" TEXT,
    "hostFirstName" TEXT,
    "hostLastName" TEXT,

    CONSTRAINT "RadioTalkshow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BeneficiaryPodcast_beneficiaryId_podcastId_key" ON "BeneficiaryPodcast"("beneficiaryId", "podcastId");

-- CreateIndex
CREATE UNIQUE INDEX "BeneficiaryTalkshow_beneficiaryId_talkshowId_key" ON "BeneficiaryTalkshow"("beneficiaryId", "talkshowId");

-- AddForeignKey
ALTER TABLE "BeneficiaryPodcast" ADD CONSTRAINT "BeneficiaryPodcast_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryPodcast" ADD CONSTRAINT "BeneficiaryPodcast_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcast"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryTalkshow" ADD CONSTRAINT "BeneficiaryTalkshow_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryTalkshow" ADD CONSTRAINT "BeneficiaryTalkshow_talkshowId_fkey" FOREIGN KEY ("talkshowId") REFERENCES "RadioTalkshow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_hostBeneficiaryId_fkey" FOREIGN KEY ("hostBeneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RadioTalkshow" ADD CONSTRAINT "RadioTalkshow_hostUserId_fkey" FOREIGN KEY ("hostUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
