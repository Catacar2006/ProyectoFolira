import { AutorLibro } from "../models/autorLibro.model.js";

class AutorLibroController{
  static async getAutorLibros(req, res) {
    try {
      const autorLibro = await AutorLibro.getAutorLibros();
      res.status(200).json(autorLibro);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener AutorLibro" + error });
    }
  }

  static async getAutorLibro(req, res) {
    try {
      const id = req.params.id;
      const autorLibro = await AutorLibro.getAutorLibro(id);
      if (autorLibro) {
        res.status(200).json(autorLibro);
      } else {
        res.status(404).json({ message: "AutorLibro no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al obtener AutorLibro" + error });
    }
  }

  static async putAutorLibro(req, res) {
    try {
      const updateAutorLibro = {
        idAutorFK: req.body.idAutorFK,
        idLibroFK: req.body.idLibroFK,
        estado: req.body.estado,
      };
      const id = req.params.id;
      await AutorLibro.updateAutorLibro(id, updateAutorLibro);
      res.status(201).json({ message: "AutorLibro actualizado con exito" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al actualizar el AutorLibro" + error });
    }
  }

  static async estadoAutorLibro(req, res) {
    try {
      const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }
      const result = await AutorLibro.alterarEstadoAutorLibro(id);
      res
        .status(200)
        .json({ message: "Estado del AutorLibro alterado con éxito" });
    } catch (error) {
      res
        .status(500)
        .json({
          message:
            "Error al alterar el estado del AutorLibro: " + error.message,
        });
    }
  }

  static async postAutorLibro(req, res) {
    try {
      const autlib = {
        idAutorFK: req.body.idAutorFK,
        idLibroFK: req.body.idLibroFK,
        estado: req.body.estado,
      };
      await AutorLibro.createAutorLibro(autlib);
      res.status(201).json({ message: "AutorLibro creado con exito" });
    } catch (error) {
      res.status(500).json({ message: "Error al crear AutorLibro" + error });
    }
  }
}

export default AutorLibroController;
