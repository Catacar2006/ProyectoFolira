import { Router } from "express";
import GeneroLiterarioController from "../controllers/generoLiterario.controller.js";
const router = Router();

router.get('/api/generoLiterario',  GeneroLiterarioController.getGeneroLiterarios);
router.get('/api/generoLiterario/:id',  GeneroLiterarioController.getGeneroLiterario);
router.put('/api/generoLiterario/:id',  GeneroLiterarioController.putGeneroLiterario);
router.post('/api/generoLiterario',  GeneroLiterarioController.postGeneroLiterario);
router.delete('/api/generoLiterario/:id',  GeneroLiterarioController.estadoGeneroLiterario);

export default router;
