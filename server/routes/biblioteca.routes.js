import { Router } from "express";
import BibliotecaController from '../controllers/biblioteca.controller.js'
const router = Router();

router.get('/api/biblioteca',  BibliotecaController.getBibliotecas);
router.get('/api/biblioteca/:id',  BibliotecaController.getBiblioteca);
router.put('/api/biblioteca/:id',  BibliotecaController.putBiblioteca);
router.post('/api/biblioteca',  BibliotecaController.postBiblioteca);
router.delete('/api/biblioteca/:id',  BibliotecaController.estadoBiblioteca);

export default router;
