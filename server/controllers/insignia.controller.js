import { Insignia } from "../models/insignia.model.js";


class InsigniaController{
    
    static async getInsignias(req,res){
        try {
            const  insignia = await Insignia.getInsignias();
            res.status(200).json(insignia);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Insignias" + error});

        }
    }
    
    static async getInsignia(req,res){
        try {
            const id =req.params.id;
            const  insignia = await Insignia.getInsignia(id);
            if(insignia){
                res.status(200).json(insignia);
            }else{
                res.status(404).json({ message: "Insignia no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Insignia" + error});

        }
    }

    static async putInsignia(req,res){
        try {
            const updateInsignia  = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                icono: req.body.icono,
                iconoURL: req.body.iconoURL,
                criterio: req.body.criterio,
                fechaCreacion: req.body.fechaCreacion,
                estado:req.body.estado
            }
            const id = req.params.id;
            await Insignia.updateInsignia(id, updateInsignia);
            res.status(201).json( {message: "Insignia actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Insignia" + error} );
        }
    }

    static async estadoInsignia(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Insignia.alterarEstadoInsignia(id);
            res.status(200).json({ message: "Estado de la Insignia alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Insignia: " + error.message });
          }
    }

    static async postInsignia(req,res){
        try {
            const insig  = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                icono: req.body.icono,
                iconoURL: req.body.iconoURL,
                criterio: req.body.criterio,
                fechaCreacion: req.body.fechaCreacion,
                estado:req.body.estado
               } 
            await Insignia.createInsignia(insig);
            res.status(201).json( {message: "Insignia creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Insignia" + error} );
        }
    }

   
}

export default InsigniaController;