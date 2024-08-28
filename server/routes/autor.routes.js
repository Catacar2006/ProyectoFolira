import { Router } from "express";
import AutorController from  "../controllers/autor.controller.js";

const router = Router();

router.get('/api/autor',  AutorController.getAutores);
router.get('/api/autor/:id',  AutorController.getAutor);
router.put('/api/autor/:id',  AutorController.putAutor);
router.post('/api/autor',  AutorController.postAutor);
router.delete('/api/autor/:id',  AutorController.estadoAutor);

export default router;
