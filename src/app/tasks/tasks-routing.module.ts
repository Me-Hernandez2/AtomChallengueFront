import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from './task-list/task-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  // Agrega aquí otras rutas relacionadas con usuarios si es necesario
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
