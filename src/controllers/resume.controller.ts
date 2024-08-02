import { Request, Response } from "express";
import prisma from "../../prisma/db";
import { checkValidate } from "../errors/handleValidate";
import formSchema from "../schemas";
import {
  responseFailed,
  responseFailValidate,
  responseSuccess,
} from "../utils/apiResponse";
import { z } from "zod";

const checkResumeExist = async (userId: number, resumeId: number) => {
  const checkResume = await prisma.cV.findFirst({
    where: {
      user_id: userId,
      id: resumeId,
    },
  });

  return checkResume;
};

const getUserResume = async (userId: number) => {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      cvs: {
        include: {
          achievement: true,
          certificates: true,
          cv_requirements: true,
          educations: true,
          experience: true,
          skill: true,
          workExperiences: true,
        },
      },
    },
  });
  return user?.cvs[0];
};

const showResume = async (req: Request, res: Response) => {
  const userId: number = req.user_id as number;
  const resume = await prisma.cV.findFirst({
    where: {
      user_id: userId,
    },
    include: {
      skill: true,
      educations: true,
      workExperiences: true,
      achievement: true,
      certificates: true,
    },
  });

  return responseSuccess(res, "", resume);
};

const storeResumeProfile = async (req: Request, res: Response) => {
  const userId: number = req.user_id as number;
  const validate = checkValidate(req.body, formSchema.resumeProfile);
  const validateData: z.infer<typeof formSchema.resumeProfile> = validate.data;

  if (!validate.success) {
    return responseFailValidate(res, validate.errors);
  }

  validateData.birth_date = new Date(validate.data.birth_date).toISOString();

  const user = await getUserResume(userId);

  const resume = await prisma.cV.upsert({
    where: {
      id: user?.id || 0,
    },
    update: {
      ...validateData,
    },
    create: {
      user_id: userId,
      ...validateData,
    },
  });

  return responseSuccess(res, "", resume);
};

const storeResumeWorkExperience = async (req: Request, res: Response) => {
  const userId: number = req.user_id as number;

  const validate = checkValidate(req.body, formSchema.resumeWorkExperience);
  const validateData: z.infer<typeof formSchema.resumeWorkExperience> =
    validate.data;

  if (!validate.success) {
    return responseFailValidate(res, validate.errors);
  }

  const user = await getUserResume(userId);

  if (user && user.workExperiences) {
    await prisma.workExperience.deleteMany({
      where: {
        cv_id: user.id,
      },
    });
  }

  const checkResume = await checkResumeExist(userId, user?.id || 0);

  if (!checkResume) {
    return responseFailValidate(res, {
      message: "CV not found",
    });
  }

  const workExperience = await prisma.workExperience.createMany({
    data: validateData.WorkExpItem.map((it: any) => ({
      cv_id: checkResume.id,
      name: it.name,
      address: it.address,
      position: it.position,
      start_at: new Date(it.start_at).toISOString(),
      end_at: new Date(it.end_at).toISOString(),
      desc: it.desc,
    })),
  });

  return responseSuccess(res, "", workExperience);
};

const storeResumeEducation = async (req: Request, res: Response) => {
  const userId: number = req.user_id as number;
  const validate = checkValidate(req.body, formSchema.resumeEducation);
  const validateData: z.infer<typeof formSchema.resumeEducation> =
    validate.data;

  if (!validate.success) {
    return responseFailValidate(res, validate.errors);
  }

  const user = await getUserResume(userId);

  let checkResume;

  if (user && user.educations) {
    await prisma.education.deleteMany({
      where: {
        cv_id: user.id,
      },
    });
    checkResume = await checkResumeExist(userId, user.id);
  }

  if (!checkResume) {
    return responseFailValidate(res, {
      message: "CV not found",
    });
  }

  const education = await prisma.education.createMany({
    data: validateData.educationItems.map((it: any) => ({
      cv_id: checkResume.id,
      name: it?.name,
      address: it?.address,
      degree: it?.degree,
      grade: it?.grade,
      start_at: new Date(it?.start_at).toISOString(),
      end_at: new Date(it?.end_at).toISOString(),
      major: it?.major,
      desc: it?.desc,
    })),
  });

  return responseSuccess(res, "", education);
};

const storeResumeSkill = async (req: Request, res: Response) => {
  const userId: number = req.user_id as number;
  const validate = checkValidate(req.body, formSchema.resumeSkill);
  const validateData: z.infer<typeof formSchema.resumeSkill> = validate.data;

  if (!validate.success) {
    return responseFailValidate(res, validate.errors);
  }

  const user = await getUserResume(userId);

  let checkResume;

  if (user && user.skill) {
    await prisma.skills.deleteMany({
      where: {
        cv_id: user.id,
      },
    });
    checkResume = await checkResumeExist(userId, user.id);
  }

  if (!checkResume) {
    return responseFailValidate(res, {
      message: "CV not found",
    });
  }

  const skill = await prisma.skills.createMany({
    data: validateData.skillItems.map((it: any) => ({
      cv_id: checkResume.id,
      name: it.name,
      skill: it.skill,
    })),
  });

  return responseSuccess(res, "", skill);
};

const storeResumeAchievement = async (req: Request, res: Response) => {
  const userId: number = req.user_id as number;
  const validate = checkValidate(req.body, formSchema.resumeAchievement);
  const validateData: z.infer<typeof formSchema.resumeAchievement> =
    validate.data;

  if (!validate.success) {
    return responseFailValidate(res, validate.errors);
  }

  const user = await getUserResume(userId);

  let checkResume;

  if (user && user.achievement) {
    await prisma.achievement.deleteMany({
      where: {
        cv_id: user.id,
      },
    });
    checkResume = await checkResumeExist(userId, user.id);
  }

  if (!checkResume) {
    return responseFailValidate(res, {
      message: "CV not found",
    });
  }

  const achievement = await prisma.achievement.createMany({
    data: validateData.achievementItems.map((it: any) => ({
      cv_id: checkResume.id,
      name: it.name,
      provider: it.provider,
      year: it.year,
    })),
  });

  return responseSuccess(res, "", achievement);
};

const resumeController = {
  showResume,
  storeResumeProfile,
  storeResumeWorkExperience,
  storeResumeEducation,
  storeResumeSkill,
  storeResumeAchievement,
};

export default resumeController;
