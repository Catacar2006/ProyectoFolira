import { Router } from "express";
import AutorLibroController from "../controllers/autorLibro.controller.js";

const router = Router();

router.get('/api/autorLibro',  AutorLibroController.getAutorLibros);
router.get('/api/autorLibro/:id',  AutorLibroController.getAutorLibro);
router.put('/api/autorLibro/:id',  AutorLibroController.putAutorLibro);
router.post('/api/autorLibro',  AutorLibroController.postAutorLibro);
router.delete('/api/autorLibro/:id',  AutorLibroController.estadoAutorLibro);

export default router;
