-- CreateEnum
CREATE TYPE "RegistrationType" AS ENUM ('internal', 'external');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "registrationLink" TEXT,
ADD COLUMN     "registrationType" "RegistrationType" NOT NULL DEFAULT 'internal';
