import express from 'express';
import { getByCode  } from '../controllers/products';
import { validateuser } from '../middlewares/auth';


const router = express.Router();

router.use(validateuser()) // lo ejecutamos antes de todo para validar el usuario

router.get("/:code", getByCode);

export default router;

