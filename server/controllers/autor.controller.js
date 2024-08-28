import { Autor } from "../models/autor.model.js";


class AutorController{
    
    static async getAutores(req,res){
        try {
            const  autor = await Autor.getAutores();
            res.status(200).json(autor);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Autores" + error});

        }
    }
    
    static async getAutor(req,res){
        try {
            const id =req.params.id;
            const  autor = await Autor.getAutor(id);
            if(autor){
                res.status(200).json(autor);
            }else{
                res.status(404).json({ message: "Autor no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Autor" + error});

        }
    }

    static async putAutor(req,res){
        try {
            const updateAutor  = {
                nombre: req.body.nombre,
                fechaNacimiento: req.body.fechaNacimiento,
                biografia: req.body.biografia,
                fotoAutor: req.body.fotoAutor,
                estado: req.body.estado
            }
            const id = req.params.id;
            await Autor.updateAutor(id, updateAutor);
            res.status(201).json( {message: "Autor actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el Autor" + error} );
        }
    }

    static async estadoAutor(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Autor.alterarEstadoAutor(id);
            res.status(200).json({ message: "Estado del Autor alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Autor: " + error.message });
          }
    }

    static async postAutor(req,res){
        try {
            const aut  = {
                nombre: req.body.nombre,
                fechaNacimiento: req.body.fechaNacimiento,
                biografia: req.body.biografia,
                fotoAutor: req.body.fotoAutor,
                estado: req.body.estado
            } 
            await Autor.createAutor(aut);
            res.status(201).json( {message: "Autor creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Autor" + error} );
        }
    }

   
}

export default AutorController;