import { Libro } from "../models/libro.model.js";


class LibroController{
    
    static async getLibros(req,res){
        try {
            const  libro = await Libro.getLibros();
            res.status(200).json(libro);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Libros" + error});

        }
    }
    
    static async getLibro(req,res){
        try {
            const id =req.params.id;
            const  libro = await Libro.getLibro(id);
            if(libro){
                res.status(200).json(libro);
            }else{
                res.status(404).json({ message: "Libro no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Libro" + error});

        }
    }

    static async putLibro(req,res){
        try {
            const updateLibro  = {
                titulo: req.body.titulo,
                ISBN: req.body.ISBN,
                fechaPublicacion: req.body.fechaPublicacion,
                editorial: req.body.editorial,
                sinopsis: req.body.sinopsis,
                portada: req.body.portada,
                calificacion:req.body.calificacion,
                estado:req.body.estado
            }
            const id = req.params.id;
            await Libro.updateLibro(id, updateLibro);
            res.status(201).json( {message: "Libro actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el Libro" + error} );
        }
    }

    static async estadoLibro(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Libro.alterarEstadoLibro(id);
            res.status(200).json({ message: "Estado del Libro alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del Libro: " + error.message });
          }
    }

    static async postLibro(req,res){
        try {
            const libr  = {
                titulo: req.body.titulo,
                ISBN: req.body.ISBN,
                fechaPublicacion: req.body.fechaPublicacion,
                editorial: req.body.editorial,
                sinopsis: req.body.sinopsis,
                portada: req.body.portada,
                calificacion:req.body.calificacion,
                estado:req.body.estado
            } 
            await Libro.createLibro(libr);
            res.status(201).json( {message: "Libro creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Libro" + error} );
        }
    }

   
}

export default LibroController;