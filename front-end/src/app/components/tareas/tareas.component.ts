import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent{

  tareaSelected: Tarea;
  readonly url_api = 'http://localhost:3000/';

  constructor(private http:HttpClient){


  }

  getTareas(){
    return this.http.get(this.url_api);
  }

  crearTarea(tarea){
    return this.http.post(this.url_api, tarea);
  }

  actualizarTarea(tarea: Tarea){
    
  }
  
}
