import { Router } from "express";
import DenunciaController from "../controllers/denuncia.controller.js";
const router = Router();

router.get('/api/denuncia',  DenunciaController.getDenuncias);
router.get('/api/denuncia/:id',  DenunciaController.getDenuncia);
router.put('/api/denuncia/:id',  DenunciaController.putDenuncia);
router.post('/api/denuncia',  DenunciaController.postDenuncia);
router.delete('/api/denuncia/:id',  DenunciaController.estadoDenuncia);

export default router;
