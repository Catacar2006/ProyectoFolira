import { Denuncia } from "../models/denuncia.model.js";


class DenunciaController{
    
    static async getDenuncias(req,res){
        try {
            const  denuncia = await Denuncia.getDenuncias();
            res.status(200).json(denuncia);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Denuncias" + error});

        }
    }
    
    static async getDenuncia(req,res){
        try {
            const id =req.params.id;
            const  denuncia = await Denuncia.getDenuncia(id);
            if(denuncia){
                res.status(200).json(denuncia);
            }else{
                res.status(404).json({ message: "Denuncia no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Denuncia" + error});

        }
    }

    static async putDenuncia(req,res){
        try {
            const updateDenuncia = {
                motivo: req.body.motivo,
                fechaCreacion: req.body.fechaCreacion,
                estado: req.body.estado,
                solucion: req.body.solucion,
                idUsuario: req.body.idUsuario,
                idComentarioFK: req.body.idComentarioFK,
                idComunidadFK:req.body.idComunidadFK,
                idPublicacionFK:req.body.idPublicacionFK
            }
            const id = req.params.id;
            await Denuncia.updateDenuncia(id, updateDenuncia);
            res.status(201).json( {message: "Denuncia actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Denuncia" + error} );
        }
    }

    static async estadoDenuncia(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Denuncia.alterarEstadoDenuncia(id);
            res.status(200).json({ message: "Estado de la Denuncia alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Denuncia: " + error.message });
          }
    }

    static async postDenuncia(req,res){
        try {
            const denun  = {
                motivo: req.body.motivo,
                fechaCreacion: req.body.fechaCreacion,
                estado: req.body.estado,
                solucion: req.body.solucion,
                idUsuario: req.body.idUsuario,
                idComentarioFK: req.body.idComentarioFK,
                idComunidadFK:req.body.idComunidadFK,
                idPublicacionFK:req.body.idPublicacionFK
            } 
            await Denuncia.createDenuncia(denun);
            res.status(201).json( {message: "Denuncia creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Denuncia" + error} );
        }
    }

   
}

export default DenunciaController;