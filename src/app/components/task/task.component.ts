import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../classes/Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() onTaskDeletion: EventEmitter<Task> = new EventEmitter();
  @Output() onTaskModification: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faEdit = faEdit;


  onDeletion(task: Task){
    this.onTaskDeletion.emit(task);
  }

  onModifyTask(task: Task){
    this.onTaskModification.emit(task);
  }

}
