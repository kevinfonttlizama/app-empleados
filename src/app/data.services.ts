import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()

export class DataServices {

    constructor(private httpClient:HttpClient){}

    
    
    guardarEmpleados(empleados:Empleado[]){
            
        this.httpClient.post('https://mis-clientes-4fd54-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            Response=>console.log("se han guardado los empleados: " + Response),

            error=> console.log("Error :" + error)
        )
    
    }

    




}