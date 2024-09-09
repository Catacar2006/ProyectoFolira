import { DataTypes, ENUM, Model, NOW } from "sequelize";
import {  sequelize } from "../config/db.js";

class GeneroLiterario extends Model {
    static async createGeneroLiterario(generoLiterario){
        try{
            return await this.create(generoLiterario);
        }catch(error){
            console.error(`error al crear GeneroLiterario: ${error}` );
            throw error;
        }
    }

    static async getGeneroLiterarios(){
        try {
            return await this.findAll();
        } catch (error) {
            console.error(`error al encontrar los GeneroLiterarios: ${error}` );
            throw error;
        }
    }

    static async getGeneroLiterario(id){
        try {
            return await this.findByPk(id);
        } catch (error) {
            console.error(`error al encontrar el GeneroLiterario: ${error}` );
            throw error;
        }
    }

    static async alterarEstadoGeneroLiterario(idGeneroLiterario) {
        try {
          const result = await sequelize.query(
            'CALL ActivarDesactivarGeneroLiterario(:idGeneroLiterario)',
            {replacements: { idGeneroLiterario },type: sequelize.QueryTypes.RAW} // Cambiado a RAW para manejar el resultado de un procedimiento almacenado
          );
          return result;
        } catch (error) {
          console.error(`Error al alterar estado del GeneroLiterario: ${error.message}`);
          throw error;
        }
      }
      

    static async updateGeneroLiterario(id, update_generoLiterario){
        try {
            const generoLiterario =  await this.findByPk(id);
            return generoLiterario.update(update_generoLiterario);
            
        } catch (error) {
            console.error(`error al actualizar el GeneroLiterario: ${error}` );
            throw error;
        }
    }
}
GeneroLiterario.init({
 
    idGeneroLiterario:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nombreGeneroLiterario:{type: DataTypes.STRING(200), allowNull:false},
    estadoGeneroLiterario:{type:DataTypes.BOOLEAN},
},
 {
    sequelize,
    tableName: "GeneroLiterario",
    timestamps: false,
    underscored: false
 }
);

export {GeneroLiterario};