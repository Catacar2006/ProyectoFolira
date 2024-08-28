import { Biblioteca } from "../models/biblioteca.model.js";


class BibliotecaController{
    
    static async getBibliotecas(req,res){
        try {
            const  biblioteca = await Biblioteca.getBibliotecas();
            res.status(200).json(biblioteca);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Bibliotecas" + error});

        }
    }
    
    static async getBiblioteca(req,res){
        try {
            const id =req.params.id;
            const  biblioteca = await Biblioteca.getBiblioteca(id);
            if(biblioteca){
                res.status(200).json(biblioteca);
            }else{
                res.status(404).json({ message: "Biblioteca no encontrada" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener Biblioteca" + error});

        }
    }

    static async putBiblioteca(req,res){
        try {
            const updateBiblioteca  = {
                tipoBiblioteca: req.body.tipoBiblioteca,
                fechaCreacion: req.body.fechaCreacion,
                biografia: req.body.biografia,
                estado: req.body.estado
            }
            const id = req.params.id;
            await Biblioteca.updateBiblioteca(id, updateBiblioteca);
            res.status(201).json( {message: "Biblioteca actualizada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar la Biblioteca" + error} );
        }
    }

    static async estadoBiblioteca(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Biblioteca.alterarEstadoBiblioteca(id);
            res.status(200).json({ message: "Estado de la Biblioteca alterada con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado de la Biblioteca: " + error.message });
          }
    }

    static async postBiblioteca(req,res){
        try {
            const bibli  = {
                tipoBiblioteca: req.body.tipoBiblioteca,
                fechaCreacion: req.body.fechaCreacion,
                biografia: req.body.biografia,
                estado: req.body.estado
            } 
            await Biblioteca.createBiblioteca(bibli);
            res.status(201).json( {message: "Biblioteca creada con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear Biblioteca" + error} );
        }
    }

   
}

export default BibliotecaController;