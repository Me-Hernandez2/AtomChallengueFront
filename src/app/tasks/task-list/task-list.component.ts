import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DefaultResponse, TaskItem} from '../interfaces/task.interface';
import {TaskService} from 'src/services/tasks/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  taskList: TaskItem[] = []

  constructor(private router: Router,
              private taskService$: TaskService) {
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  navigateToDoList() {
    this.router.navigate(['home'])
  }

  getAllTasks(event?: DefaultResponse) {
    console.log(event)
    this.taskService$.getAllTasks().subscribe((tasks: DefaultResponse) => {
      this.taskList = [...tasks.data as TaskItem[]];
    })
  }
}
