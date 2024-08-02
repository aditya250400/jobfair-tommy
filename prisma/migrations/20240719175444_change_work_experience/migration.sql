/*
  Warnings:

  - You are about to drop the column `desk` on the `WorkExperience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "desc" DROP NOT NULL;

-- AlterTable
ALTER TABLE "WorkExperience" DROP COLUMN "desk",
ADD COLUMN     "desc" TEXT[];
