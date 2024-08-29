import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";
import bcrypt from "bcrypt";

class Usuario extends Model {
  

    static async createUsuario(usuario){
        try{
            if (usuario.contrasena) {
                const salt = await bcrypt.genSalt(10);
                usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
              }
            return await this.create(usuario);
        }catch(error){
            console.error(`error al crear usuario: ${error}` );
            throw error;
        }
    }

    static async getUsuarios(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los usuarios: ${error}` );
            throw error;
        }
    }

    static async getUsuario(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el usuario: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoUsuario(idUsuario) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarUsuario(:idUsuario)',
            {replacements: { idUsuario },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del usuario: ${error.message}`);
          throw error;
        }
      }
      

    static async updateUsuario(id, update_usuario){
        try {
            const usuario =  await this.findByPk(id);
            return usuario.update(update_usuario);
            
        } catch (error) {
            console.error(`error al actualizar el usuario: ${error}` );
            throw error;
        }
        
    }
    async comparePassword(candidatePassword) {
        return bcrypt.compare(candidatePassword, this.contrasena)
      }
}
Usuario.init({
 
    idUsuario:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nombre:{type: DataTypes.STRING (255), allowNull:false, unique:true},
    correo:{type:  DataTypes.STRING (255), allowNull:false, unique:true},
    contrasena:{type: DataTypes.STRING (255), allowNull:false},
    numeroTelefono:{type:DataTypes.DECIMAL (10,0), allowNull:false},
    fechaNacimiento:{type:DataTypes.DATE, allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    genero:{type:ENUM('masculino','femenino','otro')},
    biografia:{type: DataTypes.STRING (255)},
    fotoPerfil:{type: DataTypes.STRING (255)},
    pais:{type: DataTypes.STRING (50)},
    estado:{type:DataTypes.BOOLEAN, allowNull:false},
    idRolFK:{type: DataTypes.INTEGER, allowNull:false}
},
 {
    sequelize,
    tableName: "Usuario",
    timestamps: false,
    underscored: false
 }
);

export {Usuario};