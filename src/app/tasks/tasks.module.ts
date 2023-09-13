import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { MaterialModule } from '../material.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    TaskItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
