import { Router } from "express";
import TiempoPantallaController from "../controllers/tiempoPantalla.controller.js";
const router = Router();

router.get('/api/tiempoPantalla',  TiempoPantallaController.getTiempoPantallas);
router.get('/api/tiempoPantalla/:id',  TiempoPantallaController.getTiempoPantalla);
router.put('/api/tiempoPantalla/:id',  TiempoPantallaController.putTiempoPantalla);
router.post('/api/tiempoPantalla',  TiempoPantallaController.postTiempoPantalla);
router.delete('/api/tiempoPantalla/:id',  TiempoPantallaController.estadoTiempoPantalla);

export default router;
