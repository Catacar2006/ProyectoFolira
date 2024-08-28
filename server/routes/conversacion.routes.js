import { Router } from "express";
import ConversacionRoutes from '../controllers/conversacion.controller.js';

const router = Router();

router.get('/api/conversacion',  ConversacionRoutes.getConversaciones);
router.get('/api/conversacion/:id',  ConversacionRoutes.getConversacion);
router.put('/api/conversacion/:id',  ConversacionRoutes.putConversacion);
router.post('/api/conversacion',  ConversacionRoutes.postConversacion);
router.delete('/api/conversacion/:id',  ConversacionRoutes.estadoConversacion);

export default router;
