import { Router } from "express";
import InsigniaController from "../controllers/insignia.controller.js";
const router = Router();

router.get('/api/insignia',  InsigniaController.getInsignias);
router.get('/api/insignia/:id',  InsigniaController.getInsignia);
router.put('/api/insignia/:id',  InsigniaController.putInsignia);
router.post('/api/insignia',  InsigniaController.postInsignia);
router.delete('/api/insignia/:id',  InsigniaController.estadoInsignia);

export default router;
