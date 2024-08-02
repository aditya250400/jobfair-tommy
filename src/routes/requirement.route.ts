import {Router} from "express"
import requirementController from "../controllers/requirement.controller"
import { authorize } from "../middleware/auth"

const requirementRouter = Router()
const {
    showCompany,
    showAllCompany,
    storeCompany,
    storeRequirement,
    storeRequirementEducation,
    updateCompany,
    updateRequirement,
    updateRequirementEducation,
    destroyCompany
} = requirementController

const role: string[] = ['Panitia']

requirementRouter.get('/', authorize(role), showAllCompany)
requirementRouter.get('/:id', authorize(role), showCompany)
requirementRouter.post('/', authorize(role), storeCompany)
requirementRouter.post('/requirement/:id', authorize(role), storeRequirement)
requirementRouter.post('/requirement-education/:requirementId', authorize(role), storeRequirementEducation)
requirementRouter.patch('/:id', authorize(role), updateCompany)
requirementRouter.patch('/requirement/:id', authorize(role), updateRequirement)
requirementRouter.patch('/requirement-education/:requirementId', authorize(role), updateRequirementEducation)
requirementRouter.delete('/:id', authorize(role), destroyCompany)

export default requirementRouter