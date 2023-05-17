import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de empleados';

  empleados:Empleado[]=[

    new Empleado("Kevin","Fontt","Dios",999999),
    new Empleado("cum","mckinley","subordinado",999999),
    new Empleado("scarlett","Fontt","mascota",100),
    new Empleado("fabian","muñoz","nose",0)

  ]

  agregarEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado)
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
