/*
  Warnings:

  - A unique constraint covering the columns `[projectId]` on the table `Report` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Report_projectId_key" ON "Report"("projectId");
