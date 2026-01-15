/*
  Warnings:

  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `location` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `sortOrder` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `teamRole` on the `Team` table. All the data in the column will be lost.
  - The `id` column on the `Team` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Team_isActive_sortOrder_idx";

-- DropIndex
DROP INDEX "Team_teamRole_idx";

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "location",
DROP COLUMN "sortOrder",
DROP COLUMN "teamRole",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");
