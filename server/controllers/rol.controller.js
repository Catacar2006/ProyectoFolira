import {Rol}from "../models/rol.model.js";

class  RolController {

    static async getRoles(req,res){
        try {
            const rol =await Rol.getRoles();
            res.status(200).json(rol);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener usuarios" + error});
        }
    }

    static async getRol(req,res){
        try {
            const id = req.params.id;
            const  rol = await Rol.getRol(id);
            if(rol){
                res.status(200).json(rol);
            }else{
                res.status(404).json({ message: "Rol no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el rol" + error});
        }
    }

    static async putRol(req,res){
        try {
            const updateRol ={
                TipoRol: req.body.TipoRol,
                descripcion:req.body.descripcion
            }
            const id = req.params.id;
            await Rol.updateRol(id, updateRol);
            res.status(201).json( {message: "Rol actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el Rol" + error} );
        }
    }

    static async postRol(req,res){
        try {
            const rol ={
                TipoRol: req.body.TipoRol,
                descripcion:req.body.descripcion
            }
            await Rol.createRol(rol);
            res.status(201).json( {message: "Rol creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Rol" + error} );
        }
    }

    static async estadoRol(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Rol.alterarEstadoRol(id);
            res.status(200).json({ message: "Estado del rol alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del rol: " + error.message });
          }
    }
}

export default  RolController;
