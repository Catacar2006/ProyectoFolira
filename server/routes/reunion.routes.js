import { Router } from "express";
import ReunionController from "../controllers/reunion.controller.js";
const router = Router();

router.get('/api/reunion',  ReunionController.getReuniones);
router.get('/api/reunion/:id',  ReunionController.getReunion);
router.put('/api/reunion/:id',  ReunionController.putReunion);
router.post('/api/reunion',  ReunionController.postReunion);
router.delete('/api/reunion/:id',  ReunionController.estadoReunion);

export default router;
