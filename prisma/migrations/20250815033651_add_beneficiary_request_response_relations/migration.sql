-- CreateTable
CREATE TABLE "BeneficiaryRequestResponse" (
    "id" TEXT NOT NULL,
    "responseId" TEXT NOT NULL,
    "responderId" TEXT NOT NULL,
    "responseText" JSONB NOT NULL,
    "respondedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responseUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BeneficiaryRequestResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BeneficiaryRequestResponse" ADD CONSTRAINT "BeneficiaryRequestResponse_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "BeneficiaryRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryRequestResponse" ADD CONSTRAINT "BeneficiaryRequestResponse_responderId_fkey" FOREIGN KEY ("responderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
