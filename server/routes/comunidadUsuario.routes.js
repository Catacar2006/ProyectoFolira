import { Router } from "express";
import ComunidadUsuarioController from "../controllers/comunidadUsuario.controller.js";
const router = Router();

router.get('/api/comunidadusuario',  ComunidadUsuarioController.getComunidadUsuarios);
router.get('/api/comunidadUsuario/:id',  ComunidadUsuarioController.getComunidadUsuario);
router.put('/api/comunidadUsuario/:id',  ComunidadUsuarioController.putComunidadUsuario);
router.post('/api/comunidadUsuario',  ComunidadUsuarioController.postComunidadUsuario);
router.delete('/api/comunidadUsuario/:id',  ComunidadUsuarioController.estadoComunidadUsuario);

export default router;
