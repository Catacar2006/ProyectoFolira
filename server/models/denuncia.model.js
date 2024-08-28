import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class Denuncia extends Model {
    static async createDenuncia(denuncia){
        try{
            return await this.create(denuncia);
        }catch(error){
            console.error(`error al crear Denuncia: ${error}` );
            throw error;
        }
    }

    static async getDenuncias(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar las Denuncias: ${error}` );
            throw error;
        }
    }

    static async getDenuncia(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar la Denuncia: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoDenuncia(idDenuncia) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarDenuncia(:idDenuncia)',
            {replacements: { idDenuncia },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado de la Denuncia: ${error.message}`);
          throw error;
        }
      }
      

    static async updateDenuncia(id, update_denuncia){
        try {
            const denuncia =  await this.findByPk(id);
            return denuncia.update(update_denuncia);
            
        } catch (error) {
            console.error(`error al actualizar la Denuncia: ${error}` );
            throw error;
        }
    }
}
Denuncia.init({
 
    idDenuncia:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    motivo:{type: DataTypes.TEXT, allowNull:false},
    fechaCreacion:{type: DataTypes.DATE,defaultValue:DataTypes.NOW, allowNull:false},
    estado:{type:DataTypes.BOOLEAN, allowNull:false},
    solucion:{type:  DataTypes.STRING (255), allowNull:false},
    idUsuario:{type: DataTypes.INTEGER, allowNull:false},
    idComentarioFK:{type: DataTypes.INTEGER, allowNull:true},
    idComunidadFK:{type: DataTypes.INTEGER, allowNull:true},
    idPublicacionFK:{type: DataTypes.INTEGER, allowNull:true}

},
 {
    sequelize,
    tableName: "Denuncia",
    timestamps: false,
    underscored: false
 }
);

export {Denuncia};