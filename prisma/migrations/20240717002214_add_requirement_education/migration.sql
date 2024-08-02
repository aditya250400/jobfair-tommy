/*
  Warnings:

  - You are about to drop the column `education` on the `Requirement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Requirement" DROP COLUMN "education";

-- CreateTable
CREATE TABLE "RequirementEducation" (
    "id" SERIAL NOT NULL,
    "requirement_id" INTEGER NOT NULL,
    "degree" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequirementEducation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RequirementEducation" ADD CONSTRAINT "RequirementEducation_requirement_id_fkey" FOREIGN KEY ("requirement_id") REFERENCES "Requirement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
