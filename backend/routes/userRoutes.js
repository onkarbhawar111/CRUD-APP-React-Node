import express from 'express'
import { getUsers } from '../controllers/userController'

const router = express.Router();

router('/', getUsers)

export default router