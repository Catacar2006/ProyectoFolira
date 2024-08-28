import { BibliotecaLibro } from "../models/bibliotecaLibro.model.js";

class BibliotecaLibroController{
    
    static async getBibliotecaLibros(req,res){
        try {
            const  bibliotecaLibros = await BibliotecaLibro.getBibliotecaLibros();
            res.status(200).json(bibliotecaLibros);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener BibliotecaLibros" + error});

        }
    }
    
    static async getBibliotecaLibro(req,res){
        try {
            const id =req.params.id;
            const  bibliotecaLibro = await BibliotecaLibro.getBibliotecaLibro(id);
            if(bibliotecaLibro){
                res.status(200).json(bibliotecaLibro);
            }else{
                res.status(404).json({ message: "BibliotecaLibro no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener BibliotecaLibro" + error});

        }
    }

    static async putBibliotecaLibro(req,res){
        try {
            const updateBibliotecaLibro = {
                idBibliotecaFK: req.body.idBibliotecaFK,
                idLibroFK: req.body.idLibroFK,
                estado: req.body.estado
            }
            const id = req.params.id;
            await BibliotecaLibro.updateBibliotecaLibro(id, updateBibliotecaLibro);
            res.status(201).json( {message: "BibliotecaLibro actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la BibliotecaLibro" + error} );
        }
    }

    static async estadoBibliotecaLibro(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await BibliotecaLibro.alterarEstadoBibliotecaLibro(id);
            res.status(200).json({ message: "Estado de la BibliotecaLibro alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la BibliotecaLibro: " + error.message });
          }
    }

    static async postBibliotecaLibro(req,res){
        try {
            const bibliLibr  = {
                idBibliotecaFK: req.body.idBibliotecaFK,
                idLibroFK: req.body.idLibroFK,
                estado: req.body.estado
            } 
            await BibliotecaLibro.createBibliotecaLibro(bibliLibr);
            res.status(201).json( {message: "BibliotecaLibro creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear BibliotecaLibro" + error} );
        }
    }

   
}

export default BibliotecaLibroController;