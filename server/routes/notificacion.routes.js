import { Router } from "express";
import NotificacionController from "../controllers/notificacion.controller.js";

const router = Router();

router.get('/api/notificacion',  NotificacionController.getNotificaciones);
router.get('/api/notificacion/:id',  NotificacionController.getNotificacion);
router.put('/api/notificacion/:id',  NotificacionController.putNotificacion);
router.post('/api/notificacion',  NotificacionController.postNotificacion);
router.delete('/api/notificacion/:id',  NotificacionController.estadoNotificacion);

export default router;
