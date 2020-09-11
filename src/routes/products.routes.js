import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products.controllers";

const router = Router();

router.route("/")
    .get(getProducts)
    .post(createProduct);

router.route("/:productId")
    .get(getProductById)
    .put(updateProductById)
    .delete(deleteProductById)

export default router;
