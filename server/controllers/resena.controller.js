import { Reseña } from "../models/resena.model.js";


class ReseñaController{
    
    static async getReseñas(req,res){
        try {
            const  reseñas = await Reseña.getReseñas();
            res.status(200).json(reseñas);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Reseñas" + error});

        }
    }
    
    static async getReseña(req,res){
        try {
            const id =req.params.id;
            const  reseña = await Reseña.getReseña(id);
            if(reseña){
                res.status(200).json(reseña);
            }else{
                res.status(404).json({ message: "Reseña no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Reseña" + error});

        }
    }

    static async putReseña(req,res){
        try {
            const updateReseña  = {
                titulo: req.body.titulo,
                contenido: req.body.contenido,
                fechaCreacion: req.body.fechaCreacion,
                idLibroFK: req.body.idLibroFK,
                idUsuarioFK: req.body.idUsuarioFK,
                estado: req.body.estado
            }
            const id = req.params.id;
            await Reseña.updateReseña(id, updateReseña);
            res.status(201).json( {message: "Reseña actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Reseña" + error} );
        }
    }

    static async estadoReseña(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Reseña.alterarEstadoReseña(id);
            res.status(200).json({ message: "Estado de l Reseña alterad con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Reseña: " + error.message });
          }
    }

    static async postReseña(req,res){
        try {
            const resen  = {
                titulo: req.body.titulo,
                contenido: req.body.contenido,
                fechaCreacion: req.body.fechaCreacion,
                idLibroFK: req.body.idLibroFK,
                idUsuarioFK: req.body.idUsuarioFK,
                estado: req.body.estado
            } 
            await Reseña.createReseña(resen);
            res.status(201).json( {message: "Reseña creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Reseña" + error} );
        }
    }

   
}

export default ReseñaController;