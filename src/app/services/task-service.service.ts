import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../classes/Task';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {


  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/tasks';

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTaskFromDB(task: Task) {
    let messagesElement = document.getElementById('messages');
    if (task.id !== undefined) {
      let taskElement = document.getElementById(task.id.toString());
      this.http.delete(`${this.apiUrl}/${task.id.toString()}`).toPromise()
        .then(() => {
          if (messagesElement !== null) {
            if (taskElement !== null) {
              taskElement.remove();
            }
            messagesElement.innerHTML = `Task ${task.id}, \'${task.text}\', was deleted successfully.`; 
            setTimeout(() => { if (messagesElement !== null) { messagesElement.innerHTML = ``;} }, 5000);
          }
        })
        .catch((error) => {
          if (messagesElement !== null) {
            messagesElement.innerHTML = `Error deleting task ${task.id}: ${error.message}`;
            setTimeout(() => { if (messagesElement !== null) { messagesElement.innerHTML = ``;} }, 5000);
          }
        });
    }
  }
}



