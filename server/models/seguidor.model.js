import { DataTypes, Model } from "sequelize";
import {  sequelize } from "../config/db.js";

class Seguidor extends Model {
    static async createSeguidor(seguidor){
        try{
            return await this.create(seguidor);
        }catch(error){
            console.error(`error al crear seguidor: ${error}` );
            throw error;
        }
    }

    static async getSeguidores(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los seguidores: ${error}` );
            throw error;
        }
    }

    static async getSeguidor(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el seguidor: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoSeguidor(idSeguidor) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarSeguidor(:idSeguidor)',
            {replacements: { idSeguidor },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del seguidor: ${error.message}`);
          throw error;
        }
      }
      

    static async updateSeguidor(id, update_seguidor){
        try {
            const seguidor =  await this.findByPk(id);
            return seguidor.update(update_seguidor);
            
        } catch (error) {
            console.error(`error al actualizar el seguidor: ${error}` );
            throw error;
        }
    }
}
Seguidor.init({
 
    idSeguidor:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    fechaCreacion:{type:DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false},
    idUsuarioFK:{type:DataTypes.INTEGER, allowNull:false},
    idSeguidorFK:{type:DataTypes.INTEGER, allowNull:false}
},
 {
    sequelize,
    tableName: "Seguidor",
    timestamps: false,
    underscored: false
 }
);

export {Seguidor};