import { Usuario } from "../models/usuario.model.js";


class UsuarioController{
    
    static async getUsuarios(req,res){
        try {
            const  usuarios = await Usuario.getUsuarios();
            res.status(200).json(usuarios);

        } catch (error) {
            res.status(500).json({ message: "Error al obtener usuarios" + error});

        }
    }
    
    static async getUsuario(req,res){
        try {
            const id =req.params.id;
            const  usuario = await Usuario.getUsuario(id);
            if(usuario){
                res.status(200).json(usuario);
            }else{
                res.status(404).json({ message: "Usuario no encontrado" });
            }

        } catch (error) {
            res.status(500).json({ message: "Error al obtener usuario" + error});

        }
    }

    static async putUsuario(req,res){
        try {
            const updateUsuario  = {
                nombre: req.body.nombre,
                correo: req.body.correo,
                contrasena: req.body.contrasena,
                numeroTelefono: req.body.numeroTelefono,
                fechaNacimiento: req.body.fechaNacimiento,
                fechaCreacion: req.body.fechaCreacion,
                genero:req.body.genero,
                biografia:req.body.biografia,
                fotoPerfil:req.file ? req.file.path : req.body.fotoPerfil,
                pais:req.body.pais,
                estado:req.body.estado,
                idRolFK: req.body.idRolFK
            }
            const id = req.params.id;
            await Usuario.updateUsuario(id, updateUsuario);
            res.status(201).json( {message: "Usuario actualizado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al actualizar el usuario" + error} );
        }
    }

    static async estadoUsuario(req, res) {
        try {
            const id = parseInt(req.params.id, 10); // Asegúrate de que el ID sea un número entero
            if (isNaN(id)) {
              return res.status(400).json({ message: "ID inválido" });
            }
            const result = await Usuario.alterarEstadoUsuario(id);
            res.status(200).json({ message: "Estado del usuario alterado con éxito" });
          } catch (error) {
            res.status(500).json({ message: "Error al alterar el estado del usuario: " + error.message });
          }
    }

    static async postUsuario(req,res){
        try {
            const usu  = {
                nombre: req.body.nombre,
                correo: req.body.correo,
                contrasena: req.body.contrasena,
                numeroTelefono: req.body.numeroTelefono,
                fechaNacimiento: req.body.fechaNacimiento,
                fechaCreacion: req.body.fechaCreacion,
                genero:req.body.genero,
                biografia:req.body.biografia,
                fotoPerfil:req.file ? req.file.path : null,
                pais:req.body.pais,
                estado:req.body.estado,
                idRolFK: req.body.idRolFK
            } 
            await Usuario.createUsuario(usu);
            res.status(201).json( {message: "Usuario creado con exito"} );
        } catch (error) {
            res.status(500).json( {message: "Error al crear usuario" + error} );
        }
    }

   
}

export default UsuarioController;