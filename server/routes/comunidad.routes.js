import { Router } from "express";
import ComunidadController from  "../controllers/comunidad.controller.js";   


const router = Router();

router.get('/api/comunidad',  ComunidadController.getComunidades);
router.get('/api/comunidad/:id',  ComunidadController.getComunidad);
router.put('/api/comunidad/:id',  ComunidadController.putComunidad);
router.post('/api/comunidad',  ComunidadController.postComunidad);
router.delete('/api/comunidad/:id',  ComunidadController.estadoComunidad);

export default router;