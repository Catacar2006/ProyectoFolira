import { Router } from "express";
import BibliotecaLibroController from "../controllers/bibliotecaLibro.controller.js";

const router = Router();

router.get('/api/bibliotecaLibro',  BibliotecaLibroController.getBibliotecaLibros);
router.get('/api/bibliotecaLibro/:id',  BibliotecaLibroController.getBibliotecaLibro);
router.put('/api/bibliotecaLibro/:id',  BibliotecaLibroController.putBibliotecaLibro);
router.post('/api/bibliotecaLibro',  BibliotecaLibroController.postBibliotecaLibro);
router.delete('/api/bibliotecaLibro/:id',  BibliotecaLibroController.estadoBibliotecaLibro);

export default router;
