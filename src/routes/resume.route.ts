import {Router} from 'express'
import resumeController from '../controllers/resume.controller'
import { authorize } from '../middleware/auth'

const resumeRoute = Router()
const {
    showResume,
    storeResumeProfile,
    storeResumeWorkExperience,
    storeResumeEducation,
    storeResumeSkill,
    storeResumeAchievement
} = resumeController

resumeRoute.get('/', authorize(['Pelamar']), showResume)
resumeRoute.post('/', authorize(['Pelamar']), storeResumeProfile)
resumeRoute.post('/work-experience', authorize(['Pelamar']), storeResumeWorkExperience)
resumeRoute.post('/education', authorize(['Pelamar']), storeResumeEducation)
resumeRoute.post('/skill', authorize(['Pelamar']), storeResumeSkill)
resumeRoute.post('/achievement', authorize(['Pelamar']), storeResumeAchievement)

export default resumeRoute