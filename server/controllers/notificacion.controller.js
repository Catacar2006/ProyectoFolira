import { Notificacion } from "../models/notificacion.model.js";


class NotificacionController{
    
    static async getNotificaciones(req,res){
        try {
            const  notificacion = await Notificacion.getNotificaciones();
            res.status(200).json(notificacion);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Notificaciones" + error});

        }
    }
    
    static async getNotificacion(req,res){
        try {
            const id =req.params.id;
            const  notificacion = await Notificacion.getNotificacion(id);
            if(notificacion){
                res.status(200).json(notificacion);
            }else{
                res.status(404).json({ message: "Notificacion no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Notificacion" + error});

        }
    }

    static async putNotificacion(req,res){
        try {
            const updateNotificacion  = {
                tipo: req.body.tipo,
                mensaje: req.body.mensaje,
                leido: req.body.leido,
                fechaCreacion: req.body.fechaCreacion,
                idUsuarioFK: req.body.idUsuarioFK,
                idObjetoFK:req.body.idObjetoFK,
                tipoObjeto:req.body.tipoObjeto,
                estado:req.body.estado
            }
            const id = req.params.id;
            await Notificacion.updateNotificacion(id, updateNotificacion);
            res.status(201).json( {message: "Notificacion actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Notificacion" + error} );
        }
    }

    static async estadoNotificacion(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Notificacion.alterarEstadoNotificacion(id);
            res.status(200).json({ message: "Estado de la Notificacion alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Notificacion: " + error.message });
          }
    }

    static async postNotificacion(req,res){
        try {
            const notf  = {
                tipo: req.body.tipo,
                contenidoTipo: req.body.contenidoTipo,
                mensaje: req.body.mensaje,
                leido: req.body.leido,
                fechaCreacion: req.body.fechaCreacion,
                idUsuarioFK: req.body.idUsuarioFK,
                idObjetoFK:req.body.idObjetoFK,
                tipoObjeto:req.body.tipoObjeto,
                estado:req.body.estado
            } 
            await Notificacion.createNotificacion(notf);
            res.status(201).json( {message: "Notificacion creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Notificacion" + error} );
        }
    }

   
}

export default NotificacionController;