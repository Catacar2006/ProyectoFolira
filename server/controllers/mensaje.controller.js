import { Mensaje } from "../models/mensaje.model.js";

class MensajeController{
    
    static async getMensajes(req,res){
        try {
            const  mensaje = await Mensaje.getMensajes();
            res.status(200).json(mensaje);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Mensajes" + error});

        }
    }
    
    static async getMensaje(req,res){
        try {
            const id =req.params.id;
            const  mensaje = await Mensaje.getMensaje(id);
            if(mensaje){
                res.status(200).json(mensaje);
            }else{
                res.status(404).json({ message: "Mensaje no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Mensaje" + error});

        }
    }

    static async putMensaje(req,res){
        try {
            const updateMensaje  = {
                contenido: req.body.contenido,
                fechaHoraEnvio: req.body.fechaHoraEnvio,
                estado: req.body.estado,
                idConversacionFK: req.body.idConversacionFK
            }
            const id = req.params.id;
            await Mensaje.updateMensaje(id, updateMensaje);
            res.status(201).json( {message: "Mensaje actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el Mensaje" + error} );
        }
    }

    static async estadoMensaje(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Mensaje.alterarEstadoMensaje(id);
            res.status(200).json({ message: "Estado del Mensaje alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Mensaje: " + error.message });
          }
    }

    static async postMensaje(req,res){
        try {
            const mens  = {
                contenido: req.body.contenido,
                fechaHoraEnvio: req.body.fechaHoraEnvio,
                estado: req.body.estado,
                idConversacionFK: req.body.idConversacionFK
            } 
            await Mensaje.createMensaje(mens);
            res.status(201).json( {message: "Mensaje creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Mensaje" + error} );
        }
    }

   
}

export default MensajeController;