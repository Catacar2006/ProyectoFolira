import { Seguidor } from "../models/seguidor.model.js";


class SeguidorController{
    
    static async getSeguidores(req,res){
        try {
            const  seguidor = await Seguidor.getSeguidores();
            res.status(200).json(seguidor);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener seguidor" + error});

        }
    }
    
    static async getSeguidor(req,res){
        try {
            const id =req.params.id;
            const  seguidor = await Seguidor.getSeguidor(id);
            if(seguidor){
                res.status(200).json(seguidor);
            }else{
                res.status(404).json({ message: "seguidor no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener seguidor" + error});

        }
    }

    static async putSeguidor(req,res){
        try {
            const updateSeguidor  = {
                fechaCreacion:  req.body.fechaCreacion ,
                estado:  req.body.estado ,
                idUsuarioFK:  req.body.idUsuarioFK ,
                idSeguidorFK: req.body.idSeguidor
            }
            const id = req.params.id;
            await Seguidor.updateSeguidor(id, updateSeguidor);
            res.status(201).json( {message: "Seguidor actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el Seguidor" + error} );
        }
    }

    static async estadoSeguidor(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Seguidor.alterarEstadoSeguidor(id);
            res.status(200).json({ message: "Estado del Seguidor alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Seguidor: " + error.message });
          }
    }

    static async postSeguidor(req,res){
        try {
            const seg  = {
                fechaCreacion:  req.body.fechaCreacion ,
                estado:  req.body.estado ,
                idUsuarioFK:  req.body.idUsuarioFK ,
                idSeguidorFK: req.body.idSeguidorFK
            } 
            await Seguidor.createSeguidor(seg);
            res.status(201).json( {message: "Seguidor creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Seguidor" + error} );
        }
    }

   
}

export default SeguidorController;