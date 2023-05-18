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