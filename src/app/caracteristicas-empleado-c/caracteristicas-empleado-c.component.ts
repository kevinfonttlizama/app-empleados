import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();


  agregarCaracteristica(value:string){
    this.caracteristicasEmpleados.emit(value);
  }

}


function output(): (target: CaracteristicasEmpleadoCComponent, propertyKey: "caracteristicasEmpleados") => void {
  throw new Error('Function not implemented.');

  

}



