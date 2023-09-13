import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/services/tasks/task.service';
import Swal from 'sweetalert2'
import { AddResponse, TaskItem } from '../interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit{
  @Output () updateTaskList: EventEmitter<AddResponse> = new EventEmitter();
  taskForm!: FormGroup;
  taskList: TaskItem[] = []
  constructor(private fb: FormBuilder,
              private taskService$: TaskService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  testSwal(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

  addTask(){
      const payload : TaskItem = {
        title: this.taskForm.controls['title'].value,
        description: this.taskForm.controls['description'].value,
        status: false
      }
      this.taskService$.addTask(payload).subscribe( (res:AddResponse) => {
        if(res.status === 'success')
        this.updateTaskList.emit(res)
      })
  }

  changueTaskList(){
    
  }

 
  
}
