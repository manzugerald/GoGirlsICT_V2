-- CreateEnum
CREATE TYPE "TeamRole" AS ENUM ('founder', 'co_founder', 'board_member', 'project_director', 'program_director', 'project_manager', 'coordinator', 'mentor', 'volunteer', 'advisor', 'communications', 'finance', 'operations', 'web_developer', 'web_maintainer', 'other');

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "profileImage" TEXT,
    "about" TEXT,
    "teamRole" "TeamRole" NOT NULL DEFAULT 'other',
    "email" TEXT,
    "phone" TEXT,
    "linkedInUrl" TEXT,
    "facebookUrl" TEXT,
    "xUrl" TEXT,
    "websiteUrl" TEXT,
    "location" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_email_key" ON "Team"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Team_phone_key" ON "Team"("phone");

-- CreateIndex
CREATE INDEX "Team_teamRole_idx" ON "Team"("teamRole");

-- CreateIndex
CREATE INDEX "Team_isActive_sortOrder_idx" ON "Team"("isActive", "sortOrder");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
