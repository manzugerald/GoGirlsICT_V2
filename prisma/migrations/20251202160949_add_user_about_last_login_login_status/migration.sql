/*
  Warnings:

  - The values [viewer,contributor] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `message` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `BeneficiaryMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BeneficiaryRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BeneficiaryRequestResponse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MessageCategory" AS ENUM ('beneficiary', 'request', 'system', 'external', 'go_girls_ict_team', 'testimonial');

-- CreateEnum
CREATE TYPE "LoginStatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "ResponderType" AS ENUM ('user', 'beneficiary', 'system');

-- CreateEnum
CREATE TYPE "FAQCategory" AS ENUM ('general', 'beneficiaries', 'institutions', 'projects', 'events', 'reports', 'technnology', 'other');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('super', 'admin', 'moderator', 'beneficiary', 'guest');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'guest';
COMMIT;

-- DropForeignKey
ALTER TABLE "BeneficiaryMessage" DROP CONSTRAINT "BeneficiaryMessage_beneficiaryId_fkey";

-- DropForeignKey
ALTER TABLE "BeneficiaryRequest" DROP CONSTRAINT "BeneficiaryRequest_beneficiaryId_fkey";

-- DropForeignKey
ALTER TABLE "BeneficiaryRequestResponse" DROP CONSTRAINT "BeneficiaryRequestResponse_responderId_fkey";

-- DropForeignKey
ALTER TABLE "BeneficiaryRequestResponse" DROP CONSTRAINT "BeneficiaryRequestResponse_responseId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_createdById_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "message",
ADD COLUMN     "allowResponses" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "beneficiaryId" TEXT,
ADD COLUMN     "content" JSONB NOT NULL,
ADD COLUMN     "messageCategory" "MessageCategory" NOT NULL DEFAULT 'external',
ADD COLUMN     "senderEmail" TEXT,
ADD COLUMN     "senderIp" TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "affiliated" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "createdById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "about" TEXT,
ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "loginStatus" "LoginStatus" NOT NULL DEFAULT 'inactive',
ALTER COLUMN "role" SET DEFAULT 'guest';

-- DropTable
DROP TABLE "BeneficiaryMessage";

-- DropTable
DROP TABLE "BeneficiaryRequest";

-- DropTable
DROP TABLE "BeneficiaryRequestResponse";

-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL,
    "messageId" INTEGER NOT NULL,
    "responderType" "ResponderType" NOT NULL DEFAULT 'user',
    "responderUserId" TEXT,
    "responderBeneficiaryId" TEXT,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" SERIAL NOT NULL,
    "question" JSONB NOT NULL,
    "answer" JSONB NOT NULL,
    "category" "FAQCategory" NOT NULL DEFAULT 'general',
    "publishStatus" "PublishStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "approvedById" TEXT NOT NULL,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_responderUserId_fkey" FOREIGN KEY ("responderUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_responderBeneficiaryId_fkey" FOREIGN KEY ("responderBeneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
