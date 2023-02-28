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
            setTimeout(() => { if (messagesElement !== null) { messagesElement.innerHTML = ``; } }, 5000);
          }
        })
        .catch((error) => {
          if (messagesElement !== null) {
            messagesElement.innerHTML = `Error deleting task ${task.id}: ${error.message}`;
            setTimeout(() => { if (messagesElement !== null) { messagesElement.innerHTML = ``; } }, 5000);
          }
        });
    }
  }

  createNewTask(text: string, date: string) {
    let messagesElement = document.getElementById('messages');
    const body = {
      text: text,
      day: date
    };
    this.http.post(this.apiUrl, body).subscribe(response => {
      if (messagesElement !== null) {
        messagesElement.innerHTML = `Task "${text}" was created successfully.`
        setTimeout(() => { if (messagesElement !== null) { messagesElement.innerHTML = ``;  location.reload();} }, 3000);
      }
    }, error => {
      if (messagesElement !== null) {
        messagesElement.innerHTML = 'Error creating task:', error;
        setTimeout(() => { if (messagesElement !== null) { messagesElement.innerHTML = ``; } }, 5000);
      }
    });
  }

  failedOperation(errorMessage: string){
    let messagesElement = document.getElementById('messages');
    if (messagesElement !== null) {
      messagesElement.innerHTML = errorMessage;
      setTimeout(() => { if (messagesElement !== null) { messagesElement.innerHTML = ``;  location.reload();} }, 1000);
    }
  }
}



