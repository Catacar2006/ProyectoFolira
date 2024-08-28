import { ComunidadUsuario } from "../models/comunidadUsuario.model.js";


class ComunidadUsuarioController{
    
    static async getComunidadUsuarios(req,res){
        try {
            const  comunidadusuario = await ComunidadUsuario.getComunidadUsuarios();
            res.status(200).json(comunidadusuario);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener ComunidadUsuarios" + error});

        }
    }
    
    static async getComunidadUsuario(req,res){
        try {
            const id =req.params.id;
            const comunidadusuario = await ComunidadUsuario.getComunidadUsuario(id);
            if(comunidadusuario){
                res.status(200).json(comunidadusuario);
            }else{
                res.status(404).json({ message: "ComunidadUsuario no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener ComunidadUsuario" + error});

        }
    }

    static async putComunidadUsuario(req,res){
        try {
            const updateComunidadUsuario  = {
                rol: req.body.rol ,
                estado: req.body.estado ,
                idUsuarioFK: req.body.idUsuarioFK ,
                idComunidadFK: req.body.idComunidadFK
            }
            const id = req.params.id;
            await ComunidadUsuario.updateComunidadUsuario(id, updateComunidadUsuario);
            res.status(201).json( {message: "ComunidadUsuario actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la ComunidadUsuario" + error} );
        }
    }

    static async estadoComunidadUsuario(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await ComunidadUsuario.alterarEstadoComunidadUsuario(id);
            res.status(200).json({ message: "Estado de la ComunidadUsuario alterada con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la ComunidadUsuario: " + error.message });
          }
    }

    static async postComunidadUsuario(req,res){
        try {
            const comUsu  = {
                rol: req.body.rol ,
                estado: req.body.estado ,
                idUsuarioFK: req.body.idUsuarioFK ,
                idComunidadFK: req.body.idComunidadFK
            } 
            await ComunidadUsuario.createComunidadUsuario(comUsu);
            res.status(201).json( {message: "ComunidadUsuario creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear ComunidadUsuario" + error} );
        }
    }

   
}

export default ComunidadUsuarioController;