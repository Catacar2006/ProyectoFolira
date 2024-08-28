import { Comunidad } from "../models/comunidad.model.js";


class ComunidadController{
    
    static async getComunidades(req,res){
        try {
            const  comunidad = await Comunidad.getComunidades();
            res.status(200).json(comunidad);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener la Comunidad" + error});

        }
    }
    
    static async getComunidad(req,res){
        try {
            const id =req.params.id;
            const  comunidad = await Comunidad.getComunidad(id);
            if(comunidad){
                res.status(200).json(comunidad);
            }else{
                res.status(404).json({ message: "Comunidad no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Comunidad" + error});

        }
    }

    static async putComunidad(req,res){
        try {
            const updateComunidad  = {
                nombre: req.body.nombre,
                fechaCreacion: req.body.fechaCreacion,
                descripcion: req.body. descripcion,
                estado: req.body.estado
            }
            const id = req.params.id;
            await Comunidad.updateComunidad(id, updateComunidad);
            res.status(201).json( {message: "Comunidad actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Comunidad" + error} );
        }
    }

    static async estadoComunidad(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Comunidad.alterarEstadoComunidad(id);
            res.status(200).json({ message: "Estado de la Comunidad alterada con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Comunidad: " + error.message });
          }
    }

    static async postComunidad(req,res){
        try {
            const comu  = {
                nombre: req.body.nombre,
                fechaCreacion: req.body.fechaCreacion,
                descripcion: req.body. descripcion,
                estado: req.body.estado
            } 
            await Comunidad.createComunidad(comu);
            res.status(201).json( {message: "Comunidad creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Comunidad" + error} );
        }
    }

   
}

export default ComunidadController;