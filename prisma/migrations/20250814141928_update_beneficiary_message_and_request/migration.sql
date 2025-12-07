/*
  Warnings:

  - You are about to drop the column `images` on the `BeneficiaryMessage` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `BeneficiaryMessage` table. All the data in the column will be lost.
  - Added the required column `beneficiaryMessageText` to the `BeneficiaryMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BeneficiaryMessage" DROP COLUMN "images",
DROP COLUMN "message",
ADD COLUMN     "beneficiaryMessageText" JSONB NOT NULL;
