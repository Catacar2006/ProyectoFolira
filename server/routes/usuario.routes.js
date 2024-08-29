import { Router } from "express";
import UsuarioController from "../controllers/usuario.controller.js";
import multer from 'multer';
import authMiddleware from "../middleware/auth.middleware.js";
import fs from 'fs';

const router = Router();
const uploadDir = './uploads/';

// Verifica si la carpeta existe, y si no, la crea
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const upload = multer({ dest: uploadDir , limits: { fileSize: 5 * 1024 * 1024 }});

router.get('/api/usuario',  UsuarioController.getUsuarios);
router.get('/api/usuario/:id', authMiddleware, UsuarioController.getUsuario);
router.put('/api/usuario/:id',upload.single('fotoPerfil'),  UsuarioController.putUsuario);
router.post('/api/usuario',upload.single('fotoPerfil'),  UsuarioController.postUsuario);
router.delete('/api/usuario/:id',  UsuarioController.estadoUsuario);

export default router;
