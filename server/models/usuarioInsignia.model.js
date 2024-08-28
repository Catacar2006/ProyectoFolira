import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class UsuarioInsignia extends Model {
    static async createUsuarioInsignia(usuarioInsignia){
        try{
            return await this.create(usuarioInsignia);
        }catch(error){
            console.error(`error al crear UsuarioInsignia: ${error}` );
            throw error;
        }
    }

    static async getUsuarioInsignias(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las UsuarioInsignia: ${error}` );
            throw error;
        }
    }

    static async getUsuarioInsignia(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el UsuarioInsignia: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoUsuarioInsignia(idUsuarioInsignia) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarUsuarioInsignia(:idUsuarioInsignia)',
            {replacements: { idUsuarioInsignia },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del UsuarioInsignia: ${error.message}`);
          throw error;
        }
      }
      

    static async updateUsuarioInsignia(id, update_usuarioInsignia){
        try {
            const usuarioInsignia =  await this.findByPk(id);
            return usuarioInsignia.update(update_usuarioInsignia);
            
        } catch (error) {
            console.error(`error al actualizar el UsuarioInsignia: ${error}` );
            throw error;
        }
    }
}
UsuarioInsignia.init({
 
    idUsuarioInsignia:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    idDestacado:{type: DataTypes.INTEGER, allowNull:false},
    idInsigniaFK:{type: DataTypes.INTEGER, allowNull:false},
    fechaInicio:{type:DataTypes.DATE, allowNull:false},
    fechaFin:{type:DataTypes.DATE, allowNull:false},
    fechaOtorgada:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    estado:{type:ENUM('pendiente','en_progreso','completada','cancelada'), allowNull:false},
    nota:{type: DataTypes.TEXT, allowNull:false}
},
 {
    sequelize,
    tableName: "UsuarioInsignia",
    timestamps: false,
    underscored: false
 }
);

export {UsuarioInsignia};