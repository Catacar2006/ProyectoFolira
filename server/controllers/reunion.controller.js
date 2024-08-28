import { Reunion } from "../models/reunion.model.js";


class ReunionController{
    
    static async getReuniones(req,res){
        try {
            const  reunion = await Reunion.getReuniones();
            res.status(200).json(reunion);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Reuniones" + error});

        }
    }
    
    static async getReunion(req,res){
        try {
            const id =req.params.id;
            const  reunion = await Reunion.getReunion(id);
            if(reunion){
                res.status(200).json(reunion);
            }else{
                res.status(404).json({ message: "Reunion no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Reunion" + error});

        }
    }

    static async putReunion(req,res){
        try {
            const updateReunion  = {
                idOrganizador: req.body.idOrganizador,
                titulo: req.body.titulo,
                fechaHoraInicio: req.body.fechaHoraInicio,
                ubicacion: req.body.ubicacion,
                fechaCreacion: req.body.fechaCreacion,
                estado: req.body.estado
            }
            const id = req.params.id;
            await Reunion.updateReunion(id, updateReunion);
            res.status(201).json( {message: "Reunion actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Reunion" + error} );
        }
    }

    static async estadoReunion(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Reunion.alterarEstadoReunion(id);
            res.status(200).json({ message: "Estado de la Reunion alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Reunion: " + error.message });
          }
    }

    static async postReunion(req,res){
        try {
            const reun  = {
                idOrganizador: req.body.idOrganizador,
                titulo: req.body.titulo,
                fechaHoraInicio: req.body.fechaHoraInicio,
                ubicacion: req.body.ubicacion,
                fechaCreacion: req.body.fechaCreacion,
                estado: req.body.estado
            } 
            await Reunion.createReunion(reun);
            res.status(201).json( {message: "Reunion creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Reunion" + error} );
        }
    }

   
}

export default ReunionController;