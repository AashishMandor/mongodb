import express from 'express';
import { createuser, deleteuser, getall } from '../controller/crudcontroller.js';
const router= express.Router()
router.post ('/save',createuser)
router.delete('/del/:name',deleteuser)
router.get('/all',getall)

export default router