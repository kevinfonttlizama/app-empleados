import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { loginService } from "./login/login.service";

@Injectable()

export class DataServices {

    constructor(private httpClient:HttpClient, private loginService:loginService){}

    
    cargarEmpleados(){

        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-4fd54-default-rtdb.firebaseio.com/datos.json?auth=' + token);

    }

    
    guardarEmpleados(empleados:Empleado[]){
            
        this.httpClient.put('https://mis-clientes-4fd54-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            Response=>console.log("se han guardado los empleados: " + Response),

            error=> console.log("Error :" + error)
        )
    
    }

    
    actualizarEmpleados(indice:number,empleado:Empleado){

        let url='https://mis-clientes-4fd54-default-rtdb.firebaseio.com/datos/'+ indice + '.json';

        this.httpClient.put(url,empleado).subscribe(

        Response=>console.log("se ha modificado correctamente el empleado: " + Response),

        error=> console.log("Error :" + error)
    )

    }

    eliminarEmpleado(indice:number){

        let url='https://mis-clientes-4fd54-default-rtdb.firebaseio.com/datos/'+ indice + '.json';

        this.httpClient.delete(url).subscribe(

        Response=>console.log("se ha eliminado correctamente el empleado: " + Response),

        error=> console.log("Error :" + error)
    )

    }




}