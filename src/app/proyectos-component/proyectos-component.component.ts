import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) {

  }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados
  }
  
  
  empleados:Empleado[]=[];


  volverHome() {
    this.router.navigate([''])


  }

  agregarEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate([''])


  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}


