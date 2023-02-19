import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../classes/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
}
