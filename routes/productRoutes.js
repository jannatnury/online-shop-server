import { Router } from "express";
import { createProduct, getProduct, getSingleProduct, productDelete } from "../controller/product.js";

const router = Router();


router.get('/', getProduct);
router.post('/', createProduct);
router.get('/:id', getSingleProduct);
router.delete('/:id', productDelete);

export default router;