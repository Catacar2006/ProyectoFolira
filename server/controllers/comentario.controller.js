import { Comentario } from "../models/comentario.model.js";

class ComentarioController{
    
    static async getComentarios(req,res){
        try {
            const  comentario = await Comentario.getComentarios();
            res.status(200).json(comentario);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Comentarios" + error});

        }
    }
    
    static async getComentario(req,res){
        try {
            const id =req.params.id;
            const  comentario = await Comentario.getComentario(id);
            if(comentario){
                res.status(200).json(comentario);
            }else{
                res.status(404).json({ message: "Comentario no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Comentario" + error});

        }
    }

    static async putComentario(req,res){
        try {
            const updateComentario  = {
                fechaPublicacion: req.body.fechaPublicacion ,
                contenido: req.body.contenido ,
                estado: req.body.estado ,
                idPublicacionFK: req.body.idPublicacionFK
            }
            const id = req.params.id;
            await Comentario.updateComentario(id, updateComentario);
            res.status(201).json( {message: "Comentario actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el Comentario" + error} );
        }
    }

    static async estadoComentario(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Comentario.alterarEstadoComentario(id);
            res.status(200).json({ message: "Estado del Comentario alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Comentario: " + error.message });
          }
    }

    static async postComentario(req,res){
        try {
            const comen  = {
                fechaPublicacion: req.body.fechaPublicacion ,
                contenido: req.body.contenido ,
                estado: req.body.estado ,
                idPublicacionFK: req.body.idPublicacionFK
            } 
            await Comentario.createComentario(comen);
            res.status(201).json( {message: "Comentario creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Comentario" + error} );
        }
    }

   
}

export default ComentarioController;