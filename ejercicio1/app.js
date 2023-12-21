'use strict'

function Estudiante(nombre, correo, promedio){
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarPromedio = function validarPromedio(){
        if (this.promedio >= 70){
            return 'aprovado'
        }else{
            return 'desaprovado';
        }
    }

    this.obtenerUsuario = function obtenerUsuario(){
        let pos = this.correo.indexOf('@');
        let user = this.correo.substring(0,pos);
        return user;
    }
}

let student = new Estudiante('Alex', 'alex@gmail.com', 90);

let vali = student.validarPromedio();
alert(vali)

let usu = student.obtenerUsuario();
alert(usu)


