import { Request, Response } from "express";
import formSchema from "../schemas";
import { checkValidate } from "../errors/handleValidate";
import bcrypt from "bcrypt"
import prisma from '../../prisma/db'
import { responseFailValidate, responseSuccess } from "../utils/apiResponse";

export const register = async (req: Request, res: Response) => {
    const validate = checkValidate(req.body, formSchema.register)
    if(!validate.success){
        return responseFailValidate(res, validate.errors)
    }

    const checkUser = await prisma.user.findFirst({
        where: {
            OR: [
                {
                    username: validate.data.username                    
                },
                {
                    name: validate.data.name
                }
            ]
        }
    })

    if(!!checkUser){
        return responseFailValidate(res, {
            message: 'Data nama atau username sudah digunakan',
            path: ['name', 'username']
        })        
    }
    
    validate.data.password = await bcrypt.hash(validate.data.password, 10)
    
  const user = await prisma?.user.create({
      data: {
        ...validate.data,
        role: 'Pelamar'
      }
  })

  return responseSuccess(res, '', user)
};