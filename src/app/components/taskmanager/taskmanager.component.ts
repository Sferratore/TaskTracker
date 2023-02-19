import { Component, Input, Output } from '@angular/core';
import { Task } from '../../classes/Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent {

  tasks: Task[] = TASKS;
  
}
