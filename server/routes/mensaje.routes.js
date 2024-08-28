import { Router } from "express";
import MensajeController from "../controllers/mensaje.controller.js";

const router = Router();

router.get('/api/mensaje',  MensajeController.getMensajes);
router.get('/api/mensaje/:id',  MensajeController.getMensaje);
router.put('/api/mensaje/:id',  MensajeController.putMensaje);
router.post('/api/mensaje',  MensajeController.postMensaje);
router.delete('/api/mensaje/:id',  MensajeController.estadoMensaje);

export default router;
