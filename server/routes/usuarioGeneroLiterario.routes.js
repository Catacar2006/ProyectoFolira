import actualizarGenerosUsuario from '../controllers/usuarioGeneroLiterarioController.js';
import { Router } from "express";

const router = Router();
// Ruta para actualizar los géneros literarios de un usuario
router.post('api/usuario/generos', actualizarGenerosUsuario);

export default router;