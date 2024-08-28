import { UsuarioLibro } from "../models/usuarioLibro.model.js";


class UsuarioLibroController{
    
    static async getUsuarioLibros(req,res){
        try {
            const  usuarioLibro = await UsuarioLibro.getUsuarioLibros();
            res.status(200).json(usuarioLibro);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener UsuarioLibro" + error});

        }
    }
    
    static async getUsuarioLibro(req,res){
        try {
            const id =req.params.id;
            const  usuarioLibro = await UsuarioLibro.getUsuarioLibro(id);
            if(usuarioLibro){
                res.status(200).json(usuarioLibro);
            }else{
                res.status(404).json({ message: "UsuarioLibro no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener UsuarioLibro" + error});

        }
    }

    static async putUsuarioLibro(req,res){
        try {
            const updateUsuarioLibro  = {
                UsuarioLibro: req.body.UsuarioLibro,
                estado: req.body.estado,
                idUsuarioFK: req.body.idUsuarioFK,
                idLibroFK: req.body.idLibroFK,
                estadoUsuarioLibro: req.body.estadoUsuarioLibro
            }
            const id = req.params.id;
            await UsuarioLibro.updateUsuarioLibro(id, updateUsuarioLibro);
            res.status(201).json( {message: "UsuarioLibro actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el UsuarioLibro" + error} );
        }
    }

    static async estadoUsuarioLibro(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await UsuarioLibro.alterarEstadoUsuarioLibro(id);
            res.status(200).json({ message: "Estado del UsuarioLibro alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del UsuarioLibro: " + error.message });
          }
    }

    static async postUsuarioLibro(req,res){
        try {
            const usulibr  = {
                UsuarioLibro: req.body.UsuarioLibro,
                estado: req.body.estado,
                idUsuarioFK: req.body.idUsuarioFK,
                idLibroFK: req.body.idLibroFK,
                estadoUsuarioLibro: req.body.estadoUsuarioLibro
            } 
            await UsuarioLibro.createUsuarioLibro(usulibr);
            res.status(201).json( {message: "UsuarioLibro creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear UsuarioLibro" + error} );
        }
    }

   
}

export default UsuarioLibroController;