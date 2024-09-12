import { Router } from 'express';
import {
  getProducts,
  createProduct,
  restockProduct,
  sellProduct
} from '../controllers';

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.patch('/:id/restock', restockProduct);
router.patch('/:id/sell', sellProduct);

export default router;
