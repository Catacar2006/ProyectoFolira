import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';
import UsuarioRoutes  from './routes/usuario.routes.js';
import RolRoutes from './routes/rol.routes.js';
import SeguidorRoutes from './routes/seguidor.routes.js';
import ComunidadRoutes from  './routes/comunidad.routes.js';
import ComunidadUsuarioRoutes  from './routes/comunidadUsuario.routes.js'
import PublicacionRoutes from './routes/publicacion.routes.js';
import ComentarioRoutes from  './routes/comentario.routes.js';
import ConversacionRoutes  from './routes/conversacion.routes.js';
import MensajeRoutes from './routes/mensaje.routes.js';
import AutorRoutes from './routes/autor.routes.js'
import BibliotecaRoutes from './routes/biblioteca.routes.js'
import LibroRoutes from './routes/libro.routes.js';
import AutorLibroRoutes from './routes/autorLibro.routes.js'
import BibliotecaLibroRoutes from './routes/bibliotecaLibro.routes.js';
import GeneroLiterarioRoutes from './routes/generoLiterario.routes.js';
import UsuarioLibroRoutes from './routes/usuarioLibro.routes.js';
import GeneroLibroRoutes from './routes/generoLibro.routes.js';
import ReseñaRoutes from './routes/resena.routes.js';
import DenuciaRoutes from './routes/denuncia.routes.js';
import LikeRoutes from  './routes/like.routes.js';
import NotificacionRoutes from './routes/notificacion.routes.js';
import ReunionRoutes from './routes/reunion.routes.js';
import InsigniaRoutes from './routes/insignia.routes.js';
import UsuarioInsigniaRoutes from './routes/usuarioInsignia.routes.js';
import TiempoPantallaRoutes from './routes/tiempoPantalla.routes.js'


// Obtener el directorio actual usando __filename y __dirname en módulos ES
/**/const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(cors());

// Servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static(path.join(_dirname, 'uploads')));

// Usar las rutas de la aplicación
app.use(UsuarioRoutes);
app.use(RolRoutes);
app.use(SeguidorRoutes);
app.use(ComunidadRoutes);
app.use(ComunidadUsuarioRoutes);
app.use(PublicacionRoutes);
app.use(ComentarioRoutes);
app.use(ConversacionRoutes);
app.use(MensajeRoutes);
app.use(AutorRoutes);
app.use(BibliotecaRoutes);
app.use(LibroRoutes);
app.use(AutorLibroRoutes);
app.use(BibliotecaLibroRoutes);
app.use(GeneroLiterarioRoutes);
app.use(UsuarioLibroRoutes);
app.use(GeneroLibroRoutes);
app.use(ReseñaRoutes);
app.use(DenuciaRoutes);
app.use(LikeRoutes);
app.use(NotificacionRoutes);
app.use(ReunionRoutes);
app.use(InsigniaRoutes);
app.use(UsuarioInsigniaRoutes);
app.use(TiempoPantallaRoutes);

export default app;