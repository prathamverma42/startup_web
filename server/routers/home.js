import express from 'express';
import {getHome,createHome} from '../controllers/home.js';

const router = express.Router();

router.get('/',getHome);
router.post('/',createHome);

export default router;