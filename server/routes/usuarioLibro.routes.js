import { Router } from "express";
import UsuarioLibroController from "../controllers/usuarioLibro.controller.js";
const router = Router();

router.get('/api/usuarioLibro',  UsuarioLibroController.getUsuarioLibros);
router.get('/api/usuarioLibro/:id',  UsuarioLibroController.getUsuarioLibro);
router.put('/api/usuarioLibro/:id',  UsuarioLibroController.putUsuarioLibro);
router.post('/api/usuarioLibro',  UsuarioLibroController.postUsuarioLibro);
router.delete('/api/usuarioLibro/:id',  UsuarioLibroController.estadoUsuarioLibro);

export default router;
