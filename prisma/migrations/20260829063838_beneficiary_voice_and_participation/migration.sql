-- AlterTable
ALTER TABLE "Beneficiary" ADD COLUMN     "voice" JSONB;

-- CreateTable
CREATE TABLE "BeneficiaryProject" (
    "id" TEXT NOT NULL,
    "beneficiaryId" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BeneficiaryProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeneficiaryEvent" (
    "id" TEXT NOT NULL,
    "beneficiaryId" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BeneficiaryEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeneficiaryReport" (
    "id" TEXT NOT NULL,
    "beneficiaryId" TEXT NOT NULL,
    "reportId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BeneficiaryReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BeneficiaryProject_beneficiaryId_projectId_key" ON "BeneficiaryProject"("beneficiaryId", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "BeneficiaryEvent_beneficiaryId_eventId_key" ON "BeneficiaryEvent"("beneficiaryId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "BeneficiaryReport_beneficiaryId_reportId_key" ON "BeneficiaryReport"("beneficiaryId", "reportId");

-- AddForeignKey
ALTER TABLE "BeneficiaryProject" ADD CONSTRAINT "BeneficiaryProject_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryProject" ADD CONSTRAINT "BeneficiaryProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryEvent" ADD CONSTRAINT "BeneficiaryEvent_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryEvent" ADD CONSTRAINT "BeneficiaryEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryReport" ADD CONSTRAINT "BeneficiaryReport_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryReport" ADD CONSTRAINT "BeneficiaryReport_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;
