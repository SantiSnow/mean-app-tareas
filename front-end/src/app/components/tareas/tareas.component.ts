import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [TareasService]
})
export class TareasComponent{

  constructor(TareasService: TareasService){

  }

  crearTarea(crearTarea){

  }
  
}
