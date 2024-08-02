export const authenticateToken = (authHeader: any) => {
    return new Promise(async (resolve, reject) => {
        const token: String = authHeader && authHeader.split(' ')[1]
        try {
            if(token == null){
                resolve(401)
            }else{
                resolve(token)
            }
            
        } catch (error) {
            reject(error)
        }
    })    
}