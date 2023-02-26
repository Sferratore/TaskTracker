import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent {

  constructor(private taskService: TaskServiceService) { }

  createTask() {
    var text = document.getElementById('task') as HTMLInputElement;
    var date = document.getElementById('date') as HTMLInputElement;

    if (text !== undefined && date !== undefined) {
      this.taskService.createNewTask(text.value, date.value);
    }
  }
}