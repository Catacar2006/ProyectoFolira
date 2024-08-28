import { Router } from "express";
import ReseñaController from "../controllers/resena.controller.js";

const router = Router();

router.get('/api/resena',  ReseñaController.getReseñas);
router.get('/api/resena/:id',  ReseñaController.getReseña);
router.put('/api/resena/:id',  ReseñaController.putReseña);
router.post('/api/resena',  ReseñaController.postReseña);
router.delete('/api/resena/:id',  ReseñaController.estadoReseña);

export default router;
