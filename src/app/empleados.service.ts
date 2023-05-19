import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService,private dataservice:DataServices) {

  }


    empleados:Empleado[]= [

        new Empleado("Kevin","Fontt","Dios",999999),
        new Empleado("cum","mckinley","subordinado",999999),
        new Empleado("scarlett","Fontt","mascota",100),
        new Empleado("fabian","muñoz","nose",0)
    
      ]

      agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);

        this.dataservice.guardarEmpleados(this.empleados)

      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }

      actualizaEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre= empleado.nombre;
        empleadoModificado.apellido= empleado.apellido,
        empleadoModificado.cargo= empleado.cargo,
        empleadoModificado.salario=empleado.salario

      }

      eliminarEmpleado (indice:number){

        this.empleados.splice(indice,1);

      }

}