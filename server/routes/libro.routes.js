import { Router } from "express";
import LibroController from "../controllers/libro.controller.js";

const router = Router();

router.get('/api/libro',  LibroController.getLibros);
router.get('/api/libro/:id',  LibroController.getLibro);
router.put('/api/libro/:id',  LibroController.putLibro);
router.post('/api/libro',  LibroController.postLibro);
router.delete('/api/libro/:id',  LibroController.estadoLibro);

export default router;
