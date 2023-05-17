import { Empleado } from "./empleado.model";

export class EmpleadosService{

    empleados:Empleado[]= [

        new Empleado("Kevin","Fontt","Dios",999999),
        new Empleado("cum","mckinley","subordinado",999999),
        new Empleado("scarlett","Fontt","mascota",100),
        new Empleado("fabian","muñoz","nose",0)
    
      ]

      agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
      }

}