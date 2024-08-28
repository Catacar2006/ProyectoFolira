import { TiempoPantalla } from "../models/tiempoPantalla.model.js";


class TiempoPantallaController{
    
    static async getTiempoPantallas(req,res){
        try {
            const  tiempoPantalla = await TiempoPantalla.getTiempoPantallas();
            res.status(200).json(tiempoPantalla);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener TiempoPantallas" + error});

        }
    }
    
    static async getTiempoPantalla(req,res){
        try {
            const id =req.params.id;
            const  tiempoPantalla = await TiempoPantalla.getTiempoPantalla(id);
            if(tiempoPantalla){
                res.status(200).json(tiempoPantalla);
            }else{
                res.status(404).json({ message: "TiempoPantalla no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener TiempoPantalla" + error});

        }
    }

    static async putTiempoPantalla(req,res){
        try {
            const updateTiempoPantalla  = {
                idUsuarioFK: req.body.idUsuarioFK,
                tiempoInicio: req.body.tiempoInicio,
                tiempoFin: req.body.tiempoFin,
                tiempoTotal: req.body.tiempoTotal,
                estado: req.body.estado
            }
            const id = req.params.id;
            await TiempoPantalla.updateTiempoPantalla(id, updateTiempoPantalla);
            res.status(201).json( {message: "TiempoPantalla actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el TiempoPantalla" + error} );
        }
    }

    static async estadoTiempoPantalla(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await TiempoPantalla.alterarEstadoTiempoPantalla(id);
            res.status(200).json({ message: "Estado del TiempoPantalla alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del TiempoPantalla: " + error.message });
          }
    }

    static async postTiempoPantalla(req,res){
        try {
            const tiempan  = {
                idUsuarioFK: req.body.idUsuarioFK,
                tiempoInicio: req.body.tiempoInicio,
                tiempoFin: req.body.tiempoFin,
                tiempoTotal: req.body.tiempoTotal,
                estado: req.body.estado
            } 
            await TiempoPantalla.createTiempoPantalla(tiempan);
            res.status(201).json( {message: "TiempoPantalla creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear TiempoPantalla" + error} );
        }
    }

   
}

export default TiempoPantallaController;