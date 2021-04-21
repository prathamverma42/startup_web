import express from 'express';
import {getInternships,createInternship} from '../controllers/internship.js';

const router = express.Router();

router.get('/',getInternships);
router.post('/',createInternship);

export default router;