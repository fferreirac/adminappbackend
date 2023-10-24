import express from 'express';
import { getAll, create } from '../controllers/client';
import { validateuser } from '../middlewares/auth';


const router = express.Router();

router.use(validateuser());

router.get('/', getAll);
router.post('/', create);

export default router;

