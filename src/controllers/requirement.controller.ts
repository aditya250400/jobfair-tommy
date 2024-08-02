import { Request, Response } from "express";
import prisma from "../../prisma/db";
import { responseFailValidate, responseSuccess } from "../utils/apiResponse";
import { checkValidate } from "../errors/handleValidate";
import formSchema from "../schemas";
import { z } from "zod";

const showAllCompany = async (req: Request, res: Response) => {
  const companies = await prisma.company.findMany();
  return responseSuccess(res, '', companies);
};

const showCompany = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const company = await prisma.company.findFirst({
    where: {
      id,
    },
    include: {
      requirements: {
        include: {
          education: true,
        },
      },
    },
  });

  return responseSuccess(res, "", company);
};

const storeCompany = async (req: Request, res: Response) => {
  const userId: number = req.user_id as number;
  const validate = checkValidate(req.body, formSchema.company);
  const validateData: z.infer<typeof formSchema.company> = validate.data;

  if (!validate.success) {
    return responseFailValidate(res, validate.errors);
  }

  const company = await prisma.company.create({
    data: {
      user_id: userId,
      ...validateData,      
    },
  });

  return responseSuccess(res, "", company);
};

const storeRequirement = async (req: Request, res: Response) => {    
    const companyId: number = parseInt(req.params.id)
    const validate = checkValidate(req.body, formSchema.requirement)
    const validateData: z.infer<typeof formSchema.requirement> = validate.data

    if(!validate.success){
        return responseFailValidate(res, validate.errors);
    }

    const requirement = await prisma.requirement.create({
        data: {
            company_id: companyId,
            ...validateData
        }
    })

    return responseSuccess(res, "", requirement)
};

const storeRequirementEducation = async (req: Request, res: Response) => {
    const requirementId: number = parseInt(req.params.requirementId)
    const validate = checkValidate(req.body, formSchema.requirementEducation)
    const validateData: z.infer<typeof formSchema.requirementEducation> = validate.data
    if(!validate.success){
        return responseFailValidate(res, validate.errors);
    }
    const education = await prisma.requirementEducation.createMany({
        data: validateData.educationItems.map(it => ({
            requirement_id: requirementId,
            degree: it.degree,      
            major: it.major,
            grade: it.grade,                        
        }))
    })
    return responseSuccess(res, '', education)
};

const updateCompany = async (req: Request, res: Response) => {
    const companyId: number = parseInt(req.params.id)
    const validate = checkValidate(req.body, formSchema.company)
    const validateData: z.infer<typeof formSchema.company> = validate.data

    if(!validate.success){
        return responseFailValidate(res, validate.errors);
    }

    const company = await prisma.company.update({
        where: {
            id: companyId
        },
        data: {
            ...validateData
        }
    })

    return responseSuccess(res, '', company)
};

const updateRequirement = async (req: Request, res: Response) => {
    const requirementId: number = parseInt(req.params.id)
    const validate = checkValidate(req.body, formSchema.requirement)
    const validateData: z.infer<typeof formSchema.requirement> = validate.data
    if(!validate.success){
        return responseFailValidate(res, validate.errors);
    }
    const requirement = await prisma.requirement.update({
        where: {
            id: requirementId
        },
        data: {
            ...validateData
        }
    })
    return responseSuccess(res, '', requirement)
};

const updateRequirementEducation = async (req: Request, res: Response) => {
    const requirementId: number = parseInt(req.params.requirementId)
    const validate = checkValidate(req.body, formSchema.requirementEducation)
    const validateData: z.infer<typeof formSchema.requirementEducation> = validate.data
    if(!validate.success){
        return responseFailValidate(res, validate.errors);
    }

    await prisma.requirementEducation.deleteMany({
        where: {
            requirement_id: requirementId
        }
    })
    
    const education = await prisma.requirementEducation.createMany({
        data: validateData.educationItems.map(it => ({
            requirement_id: requirementId,
            degree: it.degree,      
            major: it.major,
            grade: it.grade,                        
        }))
    })

    return responseSuccess(res, '', education)
};

const destroyCompany = async (req: Request, res: Response) => {
    const companyId: number = parseInt(req.params.id)
    const company = await prisma.company.delete({
        where: {
            id: companyId
        }
    })
    return responseSuccess(res, '', company)
};

const requirementController = {
  showCompany,
  showAllCompany,
  storeCompany,
  storeRequirement,
  storeRequirementEducation,
  updateCompany,
  updateRequirement,
  updateRequirementEducation,
  destroyCompany,
};

export default requirementController;
