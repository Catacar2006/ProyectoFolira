import { Router } from "express";
import ComentarioController from "../controllers/comentario.controller.js";
const router = Router();

router.get('/api/comentario',  ComentarioController.getComentarios);
router.get('/api/comentario/:id',  ComentarioController.getComentario);
router.put('/api/comentario/:id',  ComentarioController.putComentario);
router.post('/api/comentario',  ComentarioController.postComentario);
router.delete('/api/comentario/:id',  ComentarioController.estadoComentario);

export default router;