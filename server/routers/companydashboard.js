import express from 'express';
import {getDetails,createDetails} from '../controllers/companydashboard.js';

const router = express.Router();

router.get('/',getDetails);
router.post('/',createDetails);

export default router;