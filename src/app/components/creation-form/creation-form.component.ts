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
    var failRegex = 0;

    // Validate text input
    const textRegex = /^.{1,255}$/; // text input should have 1-255 characters
    if (!textRegex.test(text.value)) {
      alert('Text input must be between 1 and 255 characters.');
      failRegex++;
      this.taskService.failedOperation();
    }

    // Validate date input
    const dateRegex = /^(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/; // date input should be in yyyy/mm/dd hh:mm:ss format
    if (!dateRegex.test(date.value)) {
      alert('Date input must be in yyyy/mm/dd hh:mm:ss format.');
      failRegex++;
      this.taskService.failedOperation();
    }

    if (text !== undefined && date !== undefined && failRegex == 0) {
      this.taskService.createNewTask(text.value, date.value);
    }
  }
}