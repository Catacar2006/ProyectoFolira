import { Router } from "express";
import PublicacionController from "../controllers/publicacion.controller.js";
const router = Router();

router.get('/api/publicacion',  PublicacionController.getPublicaciones);
router.get('/api/publicacion/:id',  PublicacionController.getPublicacion);
router.put('/api/publicacion/:id',  PublicacionController.putUsuario);
router.post('/api/publicacion',  PublicacionController.postPublicacion);
router.delete('/api/publicacion/:id',  PublicacionController.estadoPublicacion);

export default router;