import { Router } from "express";
import GeneroLibroController from "../controllers/generoLibro.controller.js";
const router = Router();

router.get('/api/generoLibro',  GeneroLibroController.getGeneroLibros);
router.get('/api/generoLibro/:id',  GeneroLibroController.getGeneroLibro);
router.put('/api/generoLibro/:id',  GeneroLibroController.putGeneroLibro);
router.post('/api/generoLibro',  GeneroLibroController.postGeneroLibro);
router.delete('/api/generoLibro/:id',  GeneroLibroController.estadoGeneroLibro);

export default router;
