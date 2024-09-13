import { Usuario } from "../models/usuario.model.js";
import path from 'path';
import  fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UsuarioController{
    
    static async getUsuarios(req,res){
        try {
            const  usuarios = await Usuario.getUsuarios();
            res.status(200).json(usuarios);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener usuarios" + error});

        }
    }
    
    static async getUsuario(req,res){
        try {
            const id =req.params.id;
            const  usuario = await Usuario.getUsuario(id);
            if(usuario){
                res.status(200).json(usuario);
            }else{
                res.status(404).json({ message: "Usuario no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener usuario" + error});

        }
    }

    static async putUsuario(req, res) {
        try {
            const id = req.params.id;
            const usuarioExistente = await Usuario.getUsuario(id);

            if (!usuarioExistente) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            let updateUsuario = {
                idUsuario: req.body.idUsuario,
                nombre: req.body.nombre,
                correo: req.body.correo,
                contrasena: req.body.contrasena,
                numeroTelefono: req.body.numeroTelefono,
                fechaNacimiento: req.body.fechaNacimiento,
                genero: req.body.genero,
                biografia: req.body.biografia,
                fotoPerfil: usuarioExistente.fotoPerfil,
                fotoPerfilURL: usuarioExistente.fotoPerfilURL,
                fotoBanner: usuarioExistente.fotoBanner,
                fotoBannerURL: usuarioExistente.fotoBannerURL,
                pais: req.body.pais,
                estado: req.body.estado || '1',
                idRolFK: req.body.idRolFK
            };

            // Manejo de archivo de foto de perfil
            if (req.files && req.files.fotoPerfil) {
                const uploadedFilePerfil = req.files.fotoPerfil;
                const timestampPerfil = Date.now();
                const uniqueFileNamePerfil = `${uploadedFilePerfil.name.split('.')[0]}_${timestampPerfil}.${uploadedFilePerfil.name.split('.').pop()}`;
                const uploadDirPerfil = path.join(__dirname, '../uploads/img/perfiles');
                const uploadPathPerfil = path.join(uploadDirPerfil, uniqueFileNamePerfil);
                const fotoPerfilURL = `http://localhost:9906/uploads/img/perfiles/${uniqueFileNamePerfil}`;

                // Asegúrate de que el directorio exista
                if (!fs.existsSync(uploadDirPerfil)) {
                    fs.mkdirSync(uploadDirPerfil, { recursive: true });
                }

                await new Promise((resolve, reject) => {
                    uploadedFilePerfil.mv(uploadPathPerfil, (err) => {
                        if (err) return reject(err);
                        resolve();
                    });
                });

                // Elimina la imagen anterior si existe
                if (usuarioExistente.fotoPerfil) {
                    const oldImagePathPerfil = path.join(__dirname, '..', usuarioExistente.fotoPerfil);
                    if (fs.existsSync(oldImagePathPerfil)) {
                        try {
                            fs.unlinkSync(oldImagePathPerfil);
                            console.log('Imagen anterior eliminada:', oldImagePathPerfil);
                        } catch (unlinkError) {
                            console.error('Error al eliminar la imagen anterior:', unlinkError);
                        }
                    }
                }

                // Actualiza los datos de la imagen
                updateUsuario.fotoPerfil = `./uploads/img/perfiles/${uniqueFileNamePerfil}`;
                updateUsuario.fotoPerfilURL = fotoPerfilURL;
            }

            // Manejo de archivo de foto de banner
            if (req.files && req.files.fotoBanner) {
                const uploadedFileBanner = req.files.fotoBanner;
                const timestampBanner = Date.now();
                const uniqueFileNameBanner = `${uploadedFileBanner.name.split('.')[0]}_${timestampBanner}.${uploadedFileBanner.name.split('.').pop()}`;
                const uploadDirBanner = path.join(__dirname, '../uploads/img/banners');
                const uploadPathBanner = path.join(uploadDirBanner, uniqueFileNameBanner);
                const fotoBannerURL = `http://localhost:9906/uploads/img/banners/${uniqueFileNameBanner}`;

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
                if (usuarioExistente.fotoBanner) {
                    const oldImagePathBanner = path.join(__dirname, '..', usuarioExistente.fotoBanner);
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
                updateUsuario.fotoBanner = `./uploads/img/banners/${uniqueFileNameBanner}`;
                updateUsuario.fotoBannerURL = fotoBannerURL;
            }

            // Actualiza el usuario en la base de datos
            await Usuario.updateUsuario(id, updateUsuario);
            res.status(200).json({ message: "Usuario actualizado con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el usuario: " + error.message });
        }
    }

    static async estadoUsuario(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Usuario.alterarEstadoUsuario(id);
            res.status(200).json({ message: "Estado del usuario alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del usuario: " + error.message });
          }
    }

    static async postUsuario(req, res) {
        try {
            let fotoPerfil = null;
            let fotoPerfilURL = null;
            let fotoBanner = null;
            let fotoBannerURL = null;

            if (req.files) {
                if (req.files.fotoPerfil) {
                    const uploadedFilePerfil = req.files.fotoPerfil;
                    const timestampPerfil = Date.now();
                    const uniqueFileNamePerfil = `${uploadedFilePerfil.name.split('.')[0]}_${timestampPerfil}.${uploadedFilePerfil.name.split('.').pop()}`;
                    const uploadDirPerfil = path.join(__dirname, '../uploads/img/perfil');
                    const uploadPathPerfil = path.join(uploadDirPerfil, uniqueFileNamePerfil);
                    fotoPerfilURL = `http://localhost:9906/uploads/img/perfil/${uniqueFileNamePerfil}`;

                    // Asegúrate de que el directorio exista
                    if (!fs.existsSync(uploadDirPerfil)) {
                        fs.mkdirSync(uploadDirPerfil, { recursive: true });
                    }

                    await new Promise((resolve, reject) => {
                        uploadedFilePerfil.mv(uploadPathPerfil, (err) => {
                            if (err) {
                                return reject(err);
                            }
                            resolve();
                        });
                    });

                    fotoPerfil = `./uploads/img/perfil/${uniqueFileNamePerfil}`;
                }

                if (req.files.fotoBanner) {
                    const uploadedFileBanner = req.files.fotoBanner;
                    const timestampBanner = Date.now();
                    const uniqueFileNameBanner = `${uploadedFileBanner.name.split('.')[0]}_${timestampBanner}.${uploadedFileBanner.name.split('.').pop()}`;
                    const uploadDirBanner = path.join(__dirname, '../uploads/img/perfilBanner');
                    const uploadPathBanner = path.join(uploadDirBanner, uniqueFileNameBanner);
                    fotoBannerURL = `http://localhost:9906/uploads/img/perfilBanner/${uniqueFileNameBanner}`;

                    // Asegúrate de que el directorio exista
                    if (!fs.existsSync(uploadDirBanner)) {
                        fs.mkdirSync(uploadDirBanner, { recursive: true });
                    }

                    await new Promise((resolve, reject) => {
                        uploadedFileBanner.mv(uploadPathBanner, (err) => {
                            if (err) {
                                return reject(err);
                            }
                            resolve();
                        });
                    });

                    fotoBanner = `./uploads/img/perfilBanner/${uniqueFileNameBanner}`;
                }
            }

            const usu = {
                idUsuario: req.body.idUsuario,
                nombre: req.body.nombre,
                correo: req.body.correo,
                contrasena: req.body.contrasena,
                numeroTelefono: req.body.numeroTelefono,
                fechaNacimiento: req.body.fechaNacimiento,
                fechaCreacion: new Date(), // Asignar fecha de creación actual si es necesario
                genero: req.body.genero || null,
                biografia: req.body.biografia || null,
                fotoPerfil: fotoPerfil,
                fotoPerfilURL: fotoPerfilURL,
                fotoBanner: fotoBanner,
                fotoBannerURL: fotoBannerURL,
                pais: req.body.pais || null,
                estado: req.body.estado || true,
                idRolFK: req.body.idRolFK
            };

            await Usuario.createUsuario(usu);
            res.status(201).json({ message: "Usuario creado con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al crear usuario: " + error });
        }
    }

   
}

export default UsuarioController;