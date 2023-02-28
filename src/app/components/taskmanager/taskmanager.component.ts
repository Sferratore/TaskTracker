import { Component, Input, Output } from '@angular/core';
import { Task } from '../../classes/Task';
import { TASKS } from '../../mock-tasks';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent {

  constructor(private taskService: TaskServiceService){}

  tasks: Task[] = [];
  
  
  ngOnInit(): void{
    this.taskService.getAllTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task){
    this.taskService.deleteTaskFromDB(task);
  }

  modifyTask(task: Task){
    this.taskService.updateTaskStarter(task);
  }
}
