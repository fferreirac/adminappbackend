import express from 'express';
import { getAll, create  } from '../controllers/sales';
import { validateuser } from '../middlewares/auth';


const router = express.Router();

router.use(validateuser()) // lo ejecutamos antes de todo para validar el usuario

router.get("/", getAll);
router.post("/", create);

export default router;

