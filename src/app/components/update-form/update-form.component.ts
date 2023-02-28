import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  constructor(private taskService: TaskServiceService) { }

  updateTask() {
    var text = document.getElementById('taskinup') as HTMLInputElement;
    var date = document.getElementById('dateinup') as HTMLInputElement;
    var id = document.getElementById('invid') as HTMLInputElement;
    var failRegex = 0;

    // Validate text input
    const textRegex = /^.{1,255}$/; // text input should have 1-255 characters
    if (!textRegex.test(text.value)) {
      failRegex++;
      this.taskService.failedOperation('Text input must be between 1 and 255 characters.');
    }

    // Validate date input
    const dateRegex = /^(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/; // date input should be in yyyy/mm/dd hh:mm:ss format
    if (!dateRegex.test(date.value)) {
      failRegex++;
      this.taskService.failedOperation('Date input must be in yyyy/mm/dd hh:mm:ss format.');
    }

    if (text !== undefined && date !== undefined && failRegex == 0) {
      this.taskService.updateTaskFromDB(text.value, date.value, id.value);
    }
  }
}
