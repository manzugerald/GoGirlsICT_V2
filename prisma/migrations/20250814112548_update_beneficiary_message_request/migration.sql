/*
  Warnings:

  - You are about to drop the column `beneficiaryMessageImages` on the `Beneficiary` table. All the data in the column will be lost.
  - You are about to drop the column `beneficiaryMessageStatus` on the `Beneficiary` table. All the data in the column will be lost.
  - You are about to drop the column `beneficiaryMessageTitle` on the `Beneficiary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Beneficiary" DROP COLUMN "beneficiaryMessageImages",
DROP COLUMN "beneficiaryMessageStatus",
DROP COLUMN "beneficiaryMessageTitle",
ADD COLUMN     "beneficiaryStatus" "PublishStatus" NOT NULL DEFAULT 'draft';

-- CreateTable
CREATE TABLE "BeneficiaryRequest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "beneficiaryRequestText" JSONB NOT NULL,
    "status" "PublishStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "beneficiaryId" TEXT NOT NULL,

    CONSTRAINT "BeneficiaryRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeneficiaryMessage" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" JSONB NOT NULL,
    "images" TEXT[],
    "status" "PublishStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "beneficiaryId" TEXT NOT NULL,

    CONSTRAINT "BeneficiaryMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BeneficiaryRequest" ADD CONSTRAINT "BeneficiaryRequest_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryMessage" ADD CONSTRAINT "BeneficiaryMessage_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
