import { Libro } from "../models/libro.model.js";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { now } from "sequelize/lib/utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class LibroController{
    
    static async getLibros(req,res){
        try {
            const  libro = await Libro.getLibros();
            res.status(200).json(libro);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Libros" + error});

        }
    }
    
    static async getLibro(req,res){
        try {
            const id =req.params.id;
            const  libro = await Libro.getLibro(id);
            if(libro){
                res.status(200).json(libro);
            }else{
                res.status(404).json({ message: "Libro no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Libro" + error});

        }
    }

    static async putLibro(req, res) {
        try {
            const id = req.params.id;
            const libroExistente = await Libro.getLibro(id);

            if (!libroExistente) {
                return res.status(404).json({ message: 'Libro no encontrado' });
            }

            let updateLibro = {
                titulo: req.body.titulo,
                ISBN: req.body.ISBN,
                fechaPublicacion: req.body.fechaPublicacion,
                editorial: req.body.editorial,
                sinopsis: req.body.sinopsis,
                portada: libroExistente.portada,
                portadaURL: libroExistente.portadaURL,
                calificacion: req.body.calificacion,
                estado: req.body.estado || libroExistente.estado
            };

            if (req.files && req.files.portada) {
                const uploadedFile = req.files.portada;
                const timestamp = Date.now();
                const uniqueFileName = `${uploadedFile.name.split('.')[0]}_${timestamp}.${uploadedFile.name.split('.').pop()}`;
                const uploadDir = path.join(__dirname, '../uploads/img/libros');
                const uploadPath = path.join(uploadDir, uniqueFileName);
                const portadaURL = `http://localhost:9906/uploads/img/libros/${uniqueFileName}`;

                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFile.mv(uploadPath, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                if (libroExistente.portada) {
                    const oldImagePath = path.join(__dirname, '..', libroExistente.portada);
                    if (fs.existsSync(oldImagePath)) {
                        try {
                            fs.unlinkSync(oldImagePath);
                            console.log('Imagen anterior eliminada:', oldImagePath);
                        } catch (unlinkError) {
                            console.error('Error al eliminar la imagen anterior:', unlinkError);
                        }
                    }
                }

                updateLibro.portada = `./uploads/img/libros/${uniqueFileName}`;
                updateLibro.portadaURL = portadaURL;
            }

            await Libro.updateLibro(id, updateLibro);
            res.status(200).json({ message: "Libro actualizado con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el Libro: " + error.message });
        }
    }

    static async estadoLibro(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Libro.alterarEstadoLibro(id);
            res.status(200).json({ message: "Estado del Libro alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Libro: " + error.message });
          }
    }

    static async postLibro(req, res) {
        try {
            if (!req.files || !req.files.portada) {
                return res.status(400).json({ message: "No se ha subido una imagen para la portada" });
            }

            const uploadedFile = req.files.portada;
            const timestamp = Date.now();
            const uniqueFileName = `${uploadedFile.name.split('.')[0]}_${timestamp}.${uploadedFile.name.split('.').pop()}`;
            const uploadDir = path.join(__dirname, '../uploads/img/libros');
            const uploadPath = path.join(uploadDir, uniqueFileName);
            const portadaURL = `http://localhost:9906/uploads/img/libros/${uniqueFileName}`;

            // Asegúrate de que el directorio exista
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            uploadedFile.mv(uploadPath, async (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al subir la imagen: ' + err });
                }

                const libr = {
                    titulo: req.body.titulo,
                    ISBN: req.body.ISBN,
                    fechaPublicacion: new Date(),
                    editorial: req.body.editorial,
                    sinopsis: req.body.sinopsis,
                    portada: `./uploads/img/libros/${uniqueFileName}`,
                    portadaURL: portadaURL,
                    calificacion: req.body.calificacion,
                    estado: req.body.estado || true
                };

                await Libro.createLibro(libr);
                res.status(201).json({ message: "Libro creado con éxito" });
            });
        } catch (error) {
            res.status(500).json({ message: "Error al crear el Libro: " + error.message });
        }
    }
   
}

export default LibroController;