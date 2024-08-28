import { Conversacion } from "../models/conversacion.model.js";

class ConversacionController{
    
    static async getConversaciones(req,res){
        try {
            const  conversacion = await Conversacion.getConversaciones();
            res.status(200).json(conversacion);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Conversaciones" + error});

        }
    }
    
    static async getConversacion(req,res){
        try {
            const id =req.params.id;
            const  conversacion = await Conversacion.getConversacion(id);
            if(conversacion){
                res.status(200).json(conversacion);
            }else{
                res.status(404).json({ message: "Conversacion no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Conversacion" + error});

        }
    }

    static async putConversacion(req,res){
        try {
            const updateConversacion  = {
                idRemitente: req.body.idRemitente,
                idReceptor: req.body.idReceptor,
                fechaConversacion: req.body.fechaConversacion,
                estado: req.body.estado,
                tipoConversacion: req.body.tipoConversacion
            }
            const id = req.params.id;
            await Conversacion.updateConversacion(id, updateConversacion);
            res.status(201).json( {message: "Conversacion actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Conversacion" + error} );
        }
    }

    static async estadoConversacion(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Conversacion.alterarEstadoConversacion(id);
            res.status(200).json({ message: "Estado de la Conversacion alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Conversacion: " + error.message });
          }
    }

    static async postConversacion(req,res){
        try {
            const conv  = {
                idRemitente: req.body.idRemitente,
                idReceptor: req.body.idReceptor,
                fechaConversacion: req.body.fechaConversacion,
                estado: req.body.estado,
                tipoConversacion: req.body.tipoConversacion
            } 
            await Conversacion.createConversacion(conv);
            res.status(201).json( {message: "Conversacion creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Conversacion" + error} );
        }
    }

   
}

export default ConversacionController;