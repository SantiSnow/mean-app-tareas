import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from 'src/app/models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareaSelected: Tarea;
  readonly url_api = 'http://localhost:3000/';
  tareas: Tarea[];
  constructor(private http:HttpClient){
    this.tareaSelected = new Tarea();

  }

  getTareas(){
    return this.http.get(this.url_api);
  }

  postTarea(tarea: Tarea){
    return this.http.post(this.url_api, tarea);
  }

  putTarea(tarea: Tarea){
    return this.http.put('http://localhost:3000/${:id}', tarea);
  }

  deleteEmpleado(_id: string){
    return this.http.delete('http://localhost:3000/${:_id}');
  }
}
