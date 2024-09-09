import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models/usuario.model.js'; // Asegúrate de que 'Usuario' esté correctamente importado
import { sequelize } from '../config/db.js';

dotenv.config();

class AuthController {
  static async login(req, res) {
    try {
      console.log('Datos recibidos:', req.body); // Agregado para depuración
      const { correo, contrasena } = req.body;
      console.log('Email:', correo);
      const usuario = await Usuario.findOne({ where: { correo } });
      

      if (usuario) {
        // Aquí asumimos que 'comparePassword' es un método definido en el modelo Usuario
        const isMatch = await usuario.comparePassword(contrasena);
        console.log('isMatch:', isMatch)
        if (isMatch) {
          const token = jwt.sign(
            { id: usuario.idUsuario }, // Asegúrate de que 'idUsuario' sea el campo correcto
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );
      
          return res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token,
            usuario: {
              id: usuario.idUsuario,
              correo: usuario.correo,
              idRol: usuario.idRolFK
            },
          });
        } else {
          return res.status(401).json({ message: 'Credenciales incorrectas 2' });
        }
      } else {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
      }
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ message: 'Error al iniciar sesión' });
    }
    sequelize.options.logging = console.log;
  }
  
}

export default AuthController;

