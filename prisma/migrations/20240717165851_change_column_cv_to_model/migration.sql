/*
  Warnings:

  - You are about to drop the column `achievement` on the `CV` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `CV` table. All the data in the column will be lost.
  - You are about to drop the column `skill` on the `CV` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CV" DROP COLUMN "achievement",
DROP COLUMN "experience",
DROP COLUMN "skill";

-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "cv_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "skill" TEXT[],

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "cv_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "cv_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
