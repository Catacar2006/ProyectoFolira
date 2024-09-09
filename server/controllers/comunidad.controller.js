import { Comunidad } from "../models/comunidad.model.js";
import path from 'path';
import  fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComunidadController{
    
    static async getComunidades(req,res){
        try {
            const  comunidad = await Comunidad.getComunidades();
            res.status(200).json(comunidad);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener la Comunidad" + error});

        }
    }
    
    static async getComunidad(req,res){
        try {
            const id =req.params.id;
            const  comunidad = await Comunidad.getComunidad(id);
            if(comunidad){
                res.status(200).json(comunidad);
            }else{
                res.status(404).json({ message: "Comunidad no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Comunidad" + error});

        }
    }

    static async putComunidad(req, res) {
        try {
            const id = req.params.id;
            const comunidadExistente = await Comunidad.getComunidad(id);

            if (!comunidadExistente) {
                return res.status(404).json({ message: 'Comunidad no encontrada' });
            }

            let updateComunidad = {
                nombre: req.body.nombre,
                fechaCreacion: req.body.fechaCreacion,
                descripcion: req.body.descripcion,
                fotoComunidad: comunidadExistente.fotoComunidad,
                fotoComunidadURL: comunidadExistente.fotoComunidadURL,
                fotoBanner: comunidadExistente.fotoBanner,
                fotoBannerURL: comunidadExistente.fotoBannerURL,
                estado: req.body.estado
            };

            // Manejo de archivo de foto de perfil
            if (req.files && req.files.fotoComunidad) {
                const uploadedFileComunidad = req.files.fotoComunidad;
                const timestampComunidad = Date.now();
                const uniqueFileNameComunidad = `${uploadedFileComunidad.name.split('.')[0]}_${timestampComunidad}.${uploadedFileComunidad.name.split('.').pop()}`;
                const uploadDirComunidad = path.join(__dirname, '../uploads/img/comunidades');
                const uploadPathComunidad = path.join(uploadDirComunidad, uniqueFileNameComunidad);
                const fotoComunidadURL = `http://localhost:9906/uploads/img/comunidades/${uniqueFileNameComunidad}`;

                // Asegúrate de que el directorio exista
                if (!fs.existsSync(uploadDirComunidad)) {
                    fs.mkdirSync(uploadDirComunidad, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFileComunidad.mv(uploadPathComunidad, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                // Elimina la imagen anterior si existe
                if (comunidadExistente.fotoComunidad) {
                    const oldImagePathComunidad = path.join(__dirname, '..', comunidadExistente.fotoComunidad);
                    if (fs.existsSync(oldImagePathComunidad)) {
                        try {
                            fs.unlinkSync(oldImagePathComunidad);
                            console.log('Imagen anterior eliminada:', oldImagePathComunidad);
                        } catch (unlinkError) {
                            console.error('Error al eliminar la imagen anterior:', unlinkError);
                        }
                    }
                }

                // Actualiza los datos de la imagen
                updateComunidad.fotoComunidad = `./uploads/img/comunidades/${uniqueFileNameComunidad}`;
                updateComunidad.fotoComunidadURL = fotoComunidadURL;
            }

            // Manejo de archivo de foto de banner
            if (req.files && req.files.fotoBanner) {
                const uploadedFileBanner = req.files.fotoBanner;
                const timestampBanner = Date.now();
                const uniqueFileNameBanner = `${uploadedFileBanner.name.split('.')[0]}_${timestampBanner}.${uploadedFileBanner.name.split('.').pop()}`;
                const uploadDirBanner = path.join(__dirname, '../uploads/img/comunidadBanner');
                const uploadPathBanner = path.join(uploadDirBanner, uniqueFileNameBanner);
                const fotoBannerURL = `http://localhost:9906/uploads/img/comunidadBanner/${uniqueFileNameBanner}`;

                // Asegúrate de que el directorio exista
                if (!fs.existsSync(uploadDirBanner)) {
                    fs.mkdirSync(uploadDirBanner, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFileBanner.mv(uploadPathBanner, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                // Elimina la imagen anterior si existe
                if (comunidadExistente.fotoBanner) {
                    const oldImagePathBanner = path.join(__dirname, '..', comunidadExistente.fotoBanner);
                    if (fs.existsSync(oldImagePathBanner)) {
                        try {
                            fs.unlinkSync(oldImagePathBanner);
                            console.log('Imagen anterior eliminada:', oldImagePathBanner);
                        } catch (unlinkError) {
                            console.error('Error al eliminar la imagen anterior:', unlinkError);
                        }
                    }
                }

                // Actualiza los datos de la imagen
                updateComunidad.fotoBanner = `./uploads/img/comunidadBanner/${uniqueFileNameBanner}`;
                updateComunidad.fotoBannerURL = fotoBannerURL;
            }

            // Actualiza el usuario en la base de datos
            await Comunidad.updateComunidad(id, updateComunidad);
            res.status(200).json({ message: "comunidad actualizado con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar la comunidad: " + error.message });
        }
    }

    static async estadoComunidad(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Comunidad.alterarEstadoComunidad(id);
            res.status(200).json({ message: "Estado de la Comunidad alterada con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Comunidad: " + error.message });
          }
    }

    static async postComunidad(req, res) {
        try {
            const comu = {
                nombre: req.body.nombre,
                fechaCreacion: new Date(),
                descripcion: req.body.descripcion,
                fotoComunidad: null,  // Inicialmente sin foto
                fotoComunidadURL: null,
                fotoBanner: null,  // Inicialmente sin foto
                fotoBannerURL: null,
                estado: req.body.estado || true
            };

            // Manejo de archivo de foto de comunidad
            if (req.files && req.files.fotoComunidad) {
                const uploadedFileComunidad = req.files.fotoComunidad;
                const timestampComunidad = Date.now();
                const uniqueFileNameComunidad = `${uploadedFileComunidad.name.split('.')[0]}_${timestampComunidad}.${uploadedFileComunidad.name.split('.').pop()}`;
                const uploadDirComunidad = path.join(__dirname, '../uploads/img/comunidades');
                const uploadPathComunidad = path.join(uploadDirComunidad, uniqueFileNameComunidad);
                const fotoComunidadURL = `http://localhost:9906/uploads/img/comunidad/${uniqueFileNameComunidad}`;

                // Asegúrate de que el directorio exista
                if (!fs.existsSync(uploadDirComunidad)) {
                    fs.mkdirSync(uploadDirComunidad, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFileComunidad.mv(uploadPathComunidad, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                // Actualiza los datos de la imagen
                comu.fotoComunidad = `./uploads/img/comunidad/${uniqueFileNameComunidad}`;
                comu.fotoComunidadURL = fotoComunidadURL;
            }

            // Manejo de archivo de foto de banner
            if (req.files && req.files.fotoBanner) {
                const uploadedFileBanner = req.files.fotoBanner;
                const timestampBanner = Date.now();
                const uniqueFileNameBanner = `${uploadedFileBanner.name.split('.')[0]}_${timestampBanner}.${uploadedFileBanner.name.split('.').pop()}`;
                const uploadDirBanner = path.join(__dirname, '../uploads/img/comunidadBanner');
                const uploadPathBanner = path.join(uploadDirBanner, uniqueFileNameBanner);
                const fotoBannerURL = `http://localhost:9906/uploads/img/comunidadBanner/${uniqueFileNameBanner}`;

                // Asegúrate de que el directorio exista
                if (!fs.existsSync(uploadDirBanner)) {
                    fs.mkdirSync(uploadDirBanner, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFileBanner.mv(uploadPathBanner, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                // Actualiza los datos de la imagen
                comu.fotoBanner = `./uploads/img/comunidadBanner/${uniqueFileNameBanner}`;
                comu.fotoBannerURL = fotoBannerURL;
            }

            // Crea la nueva comunidad en la base de datos
            await Comunidad.createComunidad(comu);
            res.status(201).json({ message: "Comunidad creada con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al crear Comunidad: " + error.message });
        }
    }

   
}

export default ComunidadController;