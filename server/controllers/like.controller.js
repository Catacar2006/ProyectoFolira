import { Like } from "../models/like.model.js";


class LikeController{
    
    static async getLikes(req,res){
        try {
            const  like = await Like.getLikes();
            res.status(200).json(like);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Likes" + error});

        }
    }
    
    static async getLike(req,res){
        try {
            const id =req.params.id;
            const  like = await Like.getLike(id);
            if(like){
                res.status(200).json(like);
            }else{
                res.status(404).json({ message: "Like no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Like" + error});

        }
    }

    static async putLike(req,res){
        try {
            const updateLike  = {
                fecha: req.body.fecha,
                idUsuarioFK: req.body.idUsuarioFK,
                idObjetoFK: req.body.idObjetoFK,
                tipoObjeto: req.body.tipoObjeto,
                estado: req.body.estado
            }
            const id = req.params.id;
            await Like.updateLike(id, updateLike);
            res.status(201).json( {message: "Like actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el Like" + error} );
        }
    }

    static async estadoLike(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Like.alterarEstadoLike(id);
            res.status(200).json({ message: "Estado del Like alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Like: " + error.message });
          }
    }

    static async postLike(req,res){
        try {
            const like  = {
                fecha: req.body.fecha,
                idUsuarioFK: req.body.idUsuarioFK,
                idObjetoFK: req.body.idObjetoFK,
                tipoObjeto: req.body.tipoObjeto,
                estado: req.body.estado
            } 
            await Like.createLike(like);
            res.status(201).json( {message: "Like creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Like" + error} );
        }
    }

   
}

export default LikeController;