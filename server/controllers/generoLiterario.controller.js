import { GeneroLiterario } from "../models/generoLiterario.model.js";

class GeneroLiterarioController{
    
    static async getGeneroLiterarios(req,res){
        try {
            const  generoLiterarios = await GeneroLiterario.getGeneroLiterarios();
            res.status(200).json(generoLiterarios);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener GeneroLiterarios" + error});

        }
    }
    
    static async getGeneroLiterario(req,res){
        try {
            const id =req.params.id;
            const  generoLiterario = await GeneroLiterario.getGeneroLiterario(id);
            if(generoLiterario){
                res.status(200).json(generoLiterario);
            }else{
                res.status(404).json({ message: "GeneroLiterario no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener GeneroLiterario" + error});

        }
    }

    static async putGeneroLiterario(req,res){
        try {
            const updateGeneroLiterario  = {
                nombreGeneroLiterario: req.body.nombreGeneroLiterario,
                estadoGeneroLiterario: req.body.estadoGeneroLiterario
            }
            const id = req.params.id;
            await GeneroLiterario.updateGeneroLiterario(id, updateGeneroLiterario);
            res.status(201).json( {message: "GeneroLiterario actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el GeneroLiterario" + error} );
        }
    }

    static async estadoGeneroLiterario(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await GeneroLiterario.alterarEstadoGeneroLiterario(id);
            res.status(200).json({ message: "Estado del GeneroLiterario alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del GeneroLiterario: " + error.message });
          }
    }

    static async postGeneroLiterario(req,res){
        try {
            const genlit  = {
                nombreGeneroLiterario: req.body.nombreGeneroLiterario,
                estadoGeneroLiterario: req.body.estadoGeneroLiterario
            } 
            await GeneroLiterario.createGeneroLiterario(genlit);
            res.status(201).json( {message: "GeneroLiterario creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear GeneroLiterario" + error} );
        }
    }

   
}

export default GeneroLiterarioController;