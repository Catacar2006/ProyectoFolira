import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class UsuarioLibro extends Model {
    static async createUsuarioLibro(usuarioLibro){
        try{
            return await this.create(usuarioLibro);
        }catch(error){
            console.error(`error al crear UsuarioLibro: ${error}` );
            throw error;
        }
    }

    static async getUsuarioLibros(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los UsuarioLibros: ${error}` );
            throw error;
        }
    }

    static async getUsuarioLibro(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el UsuarioLibro: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoUsuarioLibro(idUsuarioLibro) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarUsuarioLibro(:idUsuarioLibro)',
            {replacements: { idUsuarioLibro },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del UsuarioLibro: ${error.message}`);
          throw error;
        }
      }
      

    static async updateUsuarioLibro(id, update_usuarioLibro){
        try {
            const usuarioLibro =  await this.findByPk(id);
            return usuarioLibro.update(update_usuarioLibro);
            
        } catch (error) {
            console.error(`error al actualizar el UsuarioLibro: ${error}` );
            throw error;
        }
    }
}
UsuarioLibro.init({
 
    idUsuarioLibro:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    estado:{type:ENUM('ya_lo_lei','por_leer')},
    idUsuarioFK:{type: DataTypes.INTEGER, allowNull:false},
    idLibroFK:{type: DataTypes.INTEGER, allowNull:false},
    estadoUsuarioLibro:{type:DataTypes.BOOLEAN, allowNull:false}
},
 {
    sequelize,
    tableName: "UsuarioLibro",
    timestamps: false,
    underscored: false
 }
);

export {UsuarioLibro};