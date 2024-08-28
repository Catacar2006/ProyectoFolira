import { Router } from "express";
import UsuarioInsigniaController from "../controllers/usuarioInsignia.controller.js";
const router = Router();

router.get('/api/usuarioInsignia',  UsuarioInsigniaController.getUsuarioInsignias);
router.get('/api/usuarioInsignia/:id',  UsuarioInsigniaController.getUsuarioInsignia);
router.put('/api/usuarioInsignia/:id',  UsuarioInsigniaController.putUsuarioInsignia);
router.post('/api/usuarioInsignia',  UsuarioInsigniaController.postUsuarioInsignia);
router.delete('/api/usuarioInsignia/:id',  UsuarioInsigniaController.estadoUsuarioInsignia);

export default router;
