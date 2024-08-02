-- DropForeignKey
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_cv_id_fkey";

-- DropForeignKey
ALTER TABLE "CV" DROP CONSTRAINT "CV_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CVRequirement" DROP CONSTRAINT "CVRequirement_cv_id_fkey";

-- DropForeignKey
ALTER TABLE "CVRequirement" DROP CONSTRAINT "CVRequirement_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_cv_id_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_cv_id_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_cv_id_fkey";

-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_stand_id_fkey";

-- DropForeignKey
ALTER TABLE "Requirement" DROP CONSTRAINT "Requirement_company_id_fkey";

-- DropForeignKey
ALTER TABLE "RequirementEducation" DROP CONSTRAINT "RequirementEducation_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_cv_id_fkey";

-- DropForeignKey
ALTER TABLE "Stand" DROP CONSTRAINT "Stand_job_fair_id_fkey";

-- DropForeignKey
ALTER TABLE "WorkExperience" DROP CONSTRAINT "WorkExperience_cv_id_fkey";

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requirement" ADD CONSTRAINT "Requirement_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequirementEducation" ADD CONSTRAINT "RequirementEducation_requirement_id_fkey" FOREIGN KEY ("requirement_id") REFERENCES "Requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stand" ADD CONSTRAINT "Stand_job_fair_id_fkey" FOREIGN KEY ("job_fair_id") REFERENCES "JobFair"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_stand_id_fkey" FOREIGN KEY ("stand_id") REFERENCES "Stand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CV" ADD CONSTRAINT "CV_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CVRequirement" ADD CONSTRAINT "CVRequirement_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CVRequirement" ADD CONSTRAINT "CVRequirement_requirement_id_fkey" FOREIGN KEY ("requirement_id") REFERENCES "Requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_cv_id_fkey" FOREIGN KEY ("cv_id") REFERENCES "CV"("id") ON DELETE CASCADE ON UPDATE CASCADE;
