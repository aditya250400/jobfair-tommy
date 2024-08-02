import { Schema, z } from "zod";

export const checkValidate = (data: any, schema: Schema) => {
    try {
        data =  schema.parse(data)
        return {
            success: true,
            errors: {},
            data
        }
    } catch (e) {
        if(e instanceof z.ZodError){
            return {
                success: false,
                errors: e.errors,
                data
            }
        }        
        throw e
    }    
}