import { Response } from "express"

export const responseSuccess = (res: Response, message: string = '', result: any | null = null) => {
    return res.status(200).json({
        status: true,
        message,
        result
    })
}

export const responseNotFound = (res: Response, message: string = 'Not Found') => {
    return res.status(404).json({
        status: false,
        message
    })
}

export const responseFailed = (res: Response, error: any) => {
    return res.status(500).json({
        status: false,
        error
    })
}

export const responseFailValidate = (res: Response, error: any) => {
    return res.status(400).json({
        status: false,
        error
    })
}

export const resposneFailAuth = (res: Response, message: any) => {
    return res.status(403).json({
        status: false,
        message
    })
}