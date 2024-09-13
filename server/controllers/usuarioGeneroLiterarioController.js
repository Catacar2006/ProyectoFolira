import {UsuarioGeneroLiterario } from '../models/usuarioGeneroLiteraio.js'
// Función para actualizar los géneros literarios de un usuario
const actualizarGenerosUsuario = async (req, res) => {
  const { idUsuario, generos } = req.body;

  try {
    // Elimina los géneros actuales para el usuario
    await UsuarioGeneroLiterario.destroy({
      where: { idUsuarioFK: idUsuario } // Ajusta el nombre de la columna si es necesario
    });

    // Inserta los nuevos géneros seleccionados
    const generosUsuario = generos.map((idGenero) => ({
      idUsuarioFK: idUsuario,  // Asegúrate de que el nombre de la columna coincida con el modelo
      idGeneroFK: idGenero  // Asegúrate de que el nombre de la columna coincida con el modelo
    }));

    await UsuarioGeneroLiterario.bulkCreate(generosUsuario);

    res.status(200).json({ message: 'Géneros actualizados con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar los géneros' });
  }
};

export default  actualizarGenerosUsuario;
