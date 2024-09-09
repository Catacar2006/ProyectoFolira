import { UsuarioInsignia } from "../models/usuarioInsignia.model.js";


class UsuarioInsigniaController{
    
    static async getUsuarioInsignias(req,res){
        try {
            const  usuarioInsignia = await UsuarioInsignia.getUsuarioInsignias();
            res.status(200).json(usuarioInsignia);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener UsuarioInsignias" + error});

        }
    }
    
    static async getUsuarioInsignia(req,res){
        try {
            const id =req.params.id;
            const  usuarioInsignia = await UsuarioInsignia.getUsuarioInsignia(id);
            if(usuarioInsignia){
                res.status(200).json(usuarioInsignia);
            }else{
                res.status(404).json({ message: "UsuarioInsignia no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener UsuarioInsignia" + error});

        }
    }

    static async putUsuarioInsignia(req,res){
        try {
            const updateUsuarioInsignia  = {
                idDestacado: req.body.idDestacado,
                idInsigniaFK: req.body.idInsigniaFK,
                fechaOtorgada: req.body.fechaOtorgada,
                estado: req.body.estado,
                nota:req.body.nota
            }
            const id = req.params.id;
            await UsuarioInsignia.updateUsuarioInsignia(id, updateUsuarioInsignia);
            res.status(201).json( {message: "UsuarioInsignia actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el UsuarioInsignia" + error} );
        }
    }

    static async estadoUsuarioInsignia(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await UsuarioInsignia.alterarEstadoUsuarioInsignia(id);
            res.status(200).json({ message: "Estado del UsuarioInsignia alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del UsuarioInsignia: " + error.message });
          }
    }

    static async postUsuarioInsignia(req,res){
        try {
            const usuinsig  = {
                idDestacado: req.body.idDestacado,
                idInsigniaFK: req.body.idInsigniaFK,
                fechaInicio: req.body.fechaInicio,
                fechaFin: req.body.fechaFin,
                fechaOtorgada: req.body.fechaOtorgada,
                estado: req.body.estado,
                nota:req.body.nota
            } 
            await UsuarioInsignia.createUsuarioInsignia(usuinsig);
            res.status(201).json( {message: "UsuarioInsignia creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear UsuarioInsignia" + error} );
        }
    }

   
}

export default UsuarioInsigniaController;