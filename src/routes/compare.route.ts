import { Router } from "express";
import compareController from '../controllers/compare.controller'
import { authorize } from "../middleware/auth";

const compareRouter = Router()
const {getResult} = compareController
 
compareRouter.get('/', authorize(['Pelamar']), getResult)

export default compareRouter