import express from 'express';
import { getAll, create, getById, update } from '../controllers/client';
import { validateuser } from '../middlewares/auth';


const router = express.Router();

router.use(validateuser());

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put("/:id", update)

export default router;

