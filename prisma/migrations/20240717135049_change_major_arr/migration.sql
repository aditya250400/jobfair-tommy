/*
  Warnings:

  - The `major` column on the `RequirementEducation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RequirementEducation" DROP COLUMN "major",
ADD COLUMN     "major" TEXT[];
