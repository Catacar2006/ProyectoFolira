import { Router } from "express";
import SeguidorController from "../controllers/seguidor.controller.js";

const router = Router();

router.get('/api/seguidor',  SeguidorController.getSeguidores);
router.get('/api/seguidor/:id',  SeguidorController.getSeguidor);
router.put('/api/seguidor/:id',  SeguidorController.putSeguidor);
router.post('/api/seguidor',  SeguidorController.postSeguidor);
router.delete('/api/seguidor/:id',  SeguidorController.estadoSeguidor);

export default router;
