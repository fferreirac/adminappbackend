import express from 'express';
import authRoutes from './auth';
import salesRoutes from "./sales";
import clientsRoutes from "./clients"
import productRoutes from "./products"

const router = express.Router();

router.use('/auth', authRoutes)
router.use('/sales', salesRoutes)
router.use("/clients", clientsRoutes)
router.use("/products", productRoutes)

export default router;