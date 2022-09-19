import { Router } from "express";
import { createProduct, getProduct, getSingleProduct, productDelete } from "../controller/product.js";

const router = Router();


router.get('/product', getProduct);
router.post('/api/product/new', createProduct);
router.get('/:id', getSingleProduct);
router.delete('/:id', productDelete);

export default router;