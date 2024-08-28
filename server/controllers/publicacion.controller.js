import { Publicacion } from "../models/publicacion.model.js";

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

    static async putUsuario(req,res){
        try {
            const updatePublicacion  = {
                contenido: req.body.contenido,
                foto: req.body.foto ,
                tipoPublicacion: req.body.tipoPublicacion,
                estado: req.body.estado,
                idComunidadFK: req.body.idComunidadFK
            }
            const id = req.params.id;
            await Publicacion.updatePublicacion(id, updatePublicacion);
            res.status(201).json( {message: "Publicacion actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Publicacion" + error} );
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

    static async postPublicacion(req,res){
        try {
            const publ  = {
                contenido: req.body.contenido,
                foto: req.body.foto ,
                tipoPublicacion: req.body.tipoPublicacion,
                estado: req.body.estado,
                idComunidadFK: req.body.idComunidadFK
            } 
            await Publicacion.createPublicacion(publ);
            res.status(201).json( {message: "Publicacion creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Publicacion" + error} );
        }
    }

   
}

export default PublicacionController;