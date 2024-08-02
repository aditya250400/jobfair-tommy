import { Request, Response } from "express"
import { checkValidate } from "../errors/handleValidate"
import formSchema from "../schemas"
import { responseFailValidate, responseSuccess, resposneFailAuth } from "../utils/apiResponse"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../../prisma/db'

require('dotenv').config('../.env')

export const login = async (req: Request, res: Response) => {
    const validate = checkValidate(req.body, formSchema.login)
    if(!validate.success){
        return responseFailValidate(res, validate.data)
    }

    const checkUser = await prisma.user.findFirst({
        where: {
            username: validate.data.username
        }
    })

    if(!!checkUser && await bcrypt.compare(validate.data.password, checkUser.password)){        
        const accessToken = jwt.sign(checkUser.id.toString(), process.env.ACCESS_TOKEN_SECRET as string)
        return responseSuccess(res, '', {
            token: accessToken
        })        
    }   
    
    return resposneFailAuth(res, 'Email dan Password salah')
    
}