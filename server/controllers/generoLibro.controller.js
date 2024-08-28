import { GeneroLibro } from "../models/generoLibro.model.js";


class GeneroLibroController{
    
    static async getGeneroLibros(req,res){
        try {
            const  generoLibro = await GeneroLibro.getGeneroLibros();
            res.status(200).json(generoLibro);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener GeneroLibros" + error});

        }
    }
    
    static async getGeneroLibro(req,res){
        try {
            const id =req.params.id;
            const  generoLibro = await GeneroLibro.getGeneroLibro(id);
            if(generoLibro){
                res.status(200).json(generoLibro);
            }else{
                res.status(404).json({ message: "GeneroLibro no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener GeneroLibro" + error});

        }
    }

    static async putGeneroLibro(req,res){
        try {
            const updateGeneroLibro  = {
                idGeneroFK: req.body.idGeneroFK,
                idLibroFK: req.body.idLibroFK,
                estado: req.body.estado
            }
            const id = req.params.id;
            await GeneroLibro.updateGeneroLibro(id, updateGeneroLibro);
            res.status(201).json( {message: "GeneroLibro actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el GeneroLibro" + error} );
        }
    }

    static async estadoGeneroLibro(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await GeneroLibro.alterarEstadoGeneroLibro(id);
            res.status(200).json({ message: "Estado del GeneroLibro alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del GeneroLibro: " + error.message });
          }
    }

    static async postGeneroLibro(req,res){
        try {
            const genlib  = {
                idGeneroFK: req.body.idGeneroFK,
                idLibroFK: req.body.idLibroFK,
                estado: req.body.estado
            } 
            await GeneroLibro.createGeneroLibro(genlib);
            res.status(201).json( {message: "GeneroLibro creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear GeneroLibro" + error} );
        }
    }

   
}

export default GeneroLibroController;