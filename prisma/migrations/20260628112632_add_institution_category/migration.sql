-- CreateEnum
CREATE TYPE "InstitutionCategory" AS ENUM ('funding', 'collaborating', 'implementing', 'beneficiary');

-- AlterTable
ALTER TABLE "Institution" ADD COLUMN     "institutionCategory" "InstitutionCategory" NOT NULL DEFAULT 'implementing';
