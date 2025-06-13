import express from 'express'
import { getUsers, deleteUser, updateUser, createUser } from '../controllers/userController.js'

const router = express.Router();

router.get('/', getUsers) 
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router