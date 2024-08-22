import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';
import UsuarioRoutes  from './routes/usuario.routes.js';


// Obtener el directorio actual usando __filename y __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(cors());

// Servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Usar las rutas de la aplicación
app.use(UsuarioRoutes);

export default app;