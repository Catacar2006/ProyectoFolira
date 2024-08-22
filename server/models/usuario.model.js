import { DataTypes, ENUM, Model } from "sequelize";
import {  sequelize } from "../config/db.js";

class Usuario extends Model {
    static async createUsuario(usuario){
        try{
            return awa+ this.create(usuario);
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

    static async updateUsuario(id, update_usuario){
        try {
            const usuario =  await this.findByPk(id);
            return usuario.update(update_usuario);
            
        } catch (error) {
            console.error(`error al actualizar el usuario: ${error}` );
            throw error;
        }
    }
}
Usuario.init({
 
    idUsuario:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nombre:{type: DataTypes.STRING (255), allowNull:false},
    correo:{type:  DataTypes.STRING (255), allowNull:false, unique:true},
    contrasena:{type: DataTypes.STRING (255), allowNull:false},
    numeroTelefono:{type:DataTypes.DECIMAL (10,0), allowNull:false},
    fechaNacimineto:{type:DataTypes.DATE, allowNull:false},
    fechaCreacion:{type: DataTypes.DATETIME, allowNull:false},
    genero:{type:ENUM('masculino','femenino','otro')},
    biografia:{type: DataTypes.STRING (255), allowNull:false},
    fotoPerfil:{type: DataTypes.STRING (255), allowNull:false},
    pais:{type: DataTypes.STRING (50), allowNull:false},
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