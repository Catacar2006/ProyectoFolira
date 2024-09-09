import { Autor } from "../models/autor.model.js";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AutorController {
    
    static async getAutores(req, res) {
        try {
            const autor = await Autor.getAutores();
            res.status(200).json(autor);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener Autores: " + error });
        }
    }
    
    static async getAutor(req, res) {
        try {
            const id = req.params.id;
            const autor = await Autor.getAutor(id);
            if (autor) {
                res.status(200).json(autor);
            } else {
                res.status(404).json({ message: "Autor no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener Autor: " + error });
        }
    }



    static async putAutor(req, res) {
        try {
            const id = req.params.id;
            const autorExistente = await Autor.getAutor(id);

            if (!autorExistente) {
                return res.status(404).json({ message: 'Autor no encontrado' });
            }

            let updateAutor = {
                nombre: req.body.nombre,
                fechaNacimiento: req.body.fechaNacimiento,
                biografia: req.body.biografia,
                fotoAutor: autorExistente.fotoAutor,
                fotoAutorURL: autorExistente.fotoAutorURL,
                estado: req.body.estado
            };

            if (req.files && req.files.fotoAutor) {
                const uploadedFile = req.files.fotoAutor;
                const timestamp = Date.now();
                const uniqueFileName = `${uploadedFile.name.split('.')[0]}_${timestamp}.${uploadedFile.name.split('.').pop()}`;
                const uploadDir = path.join(__dirname, '../uploads/img/autores');
                const uploadPath = path.join(uploadDir, uniqueFileName);
                const fotoAutorURL = `http://localhost:9906/uploads/img/autores/${uniqueFileName}`;

                // Asegúrate de que el directorio exista
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                uploadedFile.mv(uploadPath, async (err) => {
                    if (err) {
                        return res.status(500).json({ message: 'Error al mover el archivo: ' + err });
                    }

                    if (autorExistente.fotoAutor) {
                        const oldImagePath = path.join(__dirname, '..', autorExistente.fotoAutor);
                        if (fs.existsSync(oldImagePath)) {
                            try {
                                fs.unlinkSync(oldImagePath);
                                console.log('Imagen anterior eliminada:', oldImagePath);
                            } catch (unlinkError) {
                                console.error('Error al eliminar la imagen anterior:', unlinkError);
                            }
                        }
                    }

                    updateAutor = { ...updateAutor, fotoAutor: `./uploads/img/autores/${uniqueFileName}`, fotoAutorURL };
                    await Autor.updateAutor(id, updateAutor);
                    res.status(200).json({ message: "Autor actualizado con éxito" });
                });
            } else {
                // Actualiza sin cambiar la imagen
                await Autor.updateAutor(id, updateAutor);
                res.status(200).json({ message: "Autor actualizado con éxito" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el Autor: " + error });
        }
    }

    static async estadoAutor(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
                return res.status(400).json({ message: "ID inválido" });
            }
            await Autor.alterarEstadoAutor(id);
            res.status(200).json({ message: "Estado del Autor alterado con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Autor: " + error.message });
        }
    }

    static async postAutor(req, res) {
        try {
            if (!req.files || !req.files.fotoAutor) {
                return res.status(400).json({ message: "No se ha subido una imagen" });
            }

            const uploadedFile = req.files.fotoAutor;
            const timestamp = Date.now();
            const uniqueFileName = `${uploadedFile.name.split('.')[0]}_${timestamp}.${uploadedFile.name.split('.').pop()}`;
            const uploadDir = path.join(__dirname, '../uploads/img/autores');
            const uploadPath = path.join(uploadDir, uniqueFileName);
            const fotoAutorURL = `http://localhost:9906/uploads/img/autores/${uniqueFileName}`;

            // Asegúrate de que el directorio exista
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            uploadedFile.mv(uploadPath, async (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al subir la imagen: ' + err });
                }

                const aut = {
                    nombre: req.body.nombre,
                    fechaNacimiento: req.body.fechaNacimiento,
                    biografia: req.body.biografia,
                    fotoAutor: `./uploads/img/autores/${uniqueFileName}`,
                    fotoAutorURL: fotoAutorURL,
                    estado: req.body.estado
                };

                await Autor.createAutor(aut);
                res.status(201).json({ message: "Autor creado con éxito" });
            });
        } catch (error) {
            res.status(500).json({ message: "Error al crear Autor: " + error });
        }
    }
}

export default AutorController;
