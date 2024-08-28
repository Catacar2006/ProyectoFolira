import { Router } from "express";
import LikeController from "../controllers/like.controller.js";
const router = Router();

router.get('/api/like',  LikeController.getLikes);
router.get('/api/like/:id',  LikeController.getLike);
router.put('/api/like/:id',  LikeController.putLike);
router.post('/api/like',  LikeController.postLike);
router.delete('/api/like/:id',  LikeController.estadoLike);

export default router;
