import { Router } from "express";
import UsuarioController from "../controllers/usuario.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";


const router = Router();

router.get('/api/usuario',  UsuarioController.getUsuarios);
router.get('/api/usuario/:id', authMiddleware, UsuarioController.getUsuario);
router.put('/api/usuario/:id',  UsuarioController.putUsuario);
router.post('/api/usuario', UsuarioController.postUsuario);
router.delete('/api/usuario/:id',  UsuarioController.estadoUsuario);


export default router;
