import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskService} from 'src/services/tasks/task.service';
import Swal from 'sweetalert2'
import {DefaultResponse, TaskItem} from '../interfaces/task.interface';
import { ToastService } from 'src/services/toast/toast.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() updateTaskList: EventEmitter<DefaultResponse> = new EventEmitter();
  taskForm!: FormGroup;
  taskList: TaskItem[] = []

  constructor(private fb: FormBuilder,
              private taskService$: TaskService,
              private toastService$: ToastService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  addTask() {
    if(this.taskForm.valid){
      const payload: TaskItem = {
        title: this.taskForm.controls['title'].value,
        description: this.taskForm.controls['description'].value,
        status: false
      }
      this.taskService$.addTask(payload).subscribe((res: DefaultResponse) => {
        if (res.status === 'success')
        this.taskForm.reset();
          this.updateTaskList.emit(res)
      })
    }else{
      this.toastService$.showToast('error', 'Todos los campos son obligatorios.')
    }
  }

  changueTaskList() {

  }


}
