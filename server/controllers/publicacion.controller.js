import { DATE } from "sequelize";
import { Publicacion } from "../models/publicacion.model.js";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PublicacionController{
    
    static async getPublicaciones(req,res){
        try {
            const  publicacion = await Publicacion.getPublicaciones();
            res.status(200).json(publicacion);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Publicaciones" + error});

        }
    }
    
    static async getPublicacion(req,res){
        try {
            const id =req.params.id;
            const  publicacion = await Publicacion.getPublicacion(id);
            if(publicacion){
                res.status(200).json(publicacion);
            }else{
                res.status(404).json({ message: "Publicacion no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Publicacion" + error});

        }
    }

    static async putPublicacion(req, res) {
        try {
            const id = req.params.id;
            const publicacionExistente = await Publicacion.getPublicaciones(id);

            if (!publicacionExistente) {
                return res.status(404).json({ message: 'Publicación no encontrada' });
            }

            let updatePublicacion = {
                contenido: req.body.contenido,
                fotoPublicacion: publicacionExistente.fotoPublicacion,
                fotoPublicacionURL: publicacionExistente.fotoPublicacionURL,
                fechaPublicacion: new Date(),  // Fecha de actualización actual
                tipoPublicacion: req.body.tipoPublicacion,
                estado: req.body.estado,
                idComunidadFK: req.body.idComunidadFK
            };

            if (req.files && req.files.fotoPublicacion) {
                const uploadedFile = req.files.fotoPublicacion;
                const timestamp = Date.now();
                const uniqueFileName = `${uploadedFile.name.split('.')[0]}_${timestamp}.${uploadedFile.name.split('.').pop()}`;
                const uploadDir = path.join(__dirname, '../uploads/img/publicacion');
                const uploadPath = path.join(uploadDir, uniqueFileName);
                const fotoPublicacionURL = `http://localhost:9906/uploads/img/publicacion/${uniqueFileName}`;

                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFile.mv(uploadPath, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                if (publicacionExistente.fotoPublicacion) {
                    const oldImagePath = path.join(__dirname, '..', publicacionExistente.fotoPublicacion);
                    if (fs.existsSync(oldImagePath)) {
                        try {
                            fs.unlinkSync(oldImagePath);
                            console.log('Imagen anterior eliminada:', oldImagePath);
                        } catch (unlinkError) {
                            console.error('Error al eliminar la imagen anterior:', unlinkError);
                        }
                    }
                }

                updatePublicacion.fotoPublicacion = `./uploads/img/publicacion/${uniqueFileName}`;
                updatePublicacion.fotoPublicacionURL = fotoPublicacionURL;
            }

            await Publicacion.updatePublicacion(id, updatePublicacion);
            res.status(200).json({ message: "Publicación actualizada con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar la Publicación: " + error.message });
        }
    }

    static async estadoPublicacion(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Publicacion.alterarEstadoPublicacion(id);
            res.status(200).json({ message: "Estado de la Publicacion alterada con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Publicacion: " + error.message });
          }
    }

    static async postPublicacion(req, res) {
        try {
            const publi = {
                contenido: req.body.contenido,
                fotoPublicacion: null,  // Inicialmente sin foto
                fotoPublicacionURL: null,
                fechaPublicacion: new Date(),  // Fecha de publicación actual
                tipoPublicacion: req.body.tipoPublicacion,
                estado: req.body.estado || true,
                idComunidadFK: req.body.idComunidadFK
            };

            if (req.files && req.files.fotoPublicacion) {
                const uploadedFile = req.files.fotoPublicacion;
                const timestamp = Date.now();
                const uniqueFileName = `${uploadedFile.name.split('.')[0]}_${timestamp}.${uploadedFile.name.split('.').pop()}`;
                const uploadDir = path.join(__dirname, '../uploads/img/publicaciones');
                const uploadPath = path.join(uploadDir, uniqueFileName);
                const fotoPublicacionURL = `http://localhost:9906/uploads/img/publicacion/${uniqueFileName}`;

                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFile.mv(uploadPath, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                publi.fotoPublicacion = `./uploads/img/publicacion/${uniqueFileName}`;
                publi.fotoPublicacionURL = fotoPublicacionURL;
            }

            await Publicacion.createPublicacion(publi);
            res.status(201).json({ message: "Publicación creada con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al crear Publicación: " + error.message });
        }
    }

   
}

export default PublicacionController;