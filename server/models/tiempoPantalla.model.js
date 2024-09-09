import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class TiempoPantalla extends Model {
    static async createTiempoPantalla(tiempoPantalla){
        try{
            return await this.create(tiempoPantalla);
        }catch(error){
            console.error(`error al crear TiempoPantalla: ${error}` );
            throw error;
        }
    }

    static async getTiempoPantallas(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los TiempoPantallas: ${error}` );
            throw error;
        }
    }

    static async getTiempoPantalla(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el TiempoPantalla: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoTiempoPantalla(idTiempoPantalla) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarTiempoPantalla(:idTiempoPantalla)',
            {replacements: { idTiempoPantalla },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del TiempoPantalla: ${error.message}`);
          throw error;
        }
      }
      

    static async updateTiempoPantalla(id, update_tiempoPantalla){
        try {
            const tiempoPantalla =  await this.findByPk(id);
            return tiempoPantalla.update(update_tiempoPantalla);
            
        } catch (error) {
            console.error(`error al actualizar el TiempoPantalla: ${error}` );
            throw error;
        }
    }
}
TiempoPantalla.init({
 
    idTiempoPantalla:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    idUsuarioFK:{type: DataTypes.INTEGER, allowNull:false},
    tiempoInicio:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    tiempoFin:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    tiempoTotal:{type: DataTypes.INTEGER, allowNull:false},
    estado:{type:DataTypes.BOOLEAN}
},
 {
    sequelize,
    tableName: "TiempoPantalla",
    timestamps: false,
    underscored: false
 }
);

export {TiempoPantalla};