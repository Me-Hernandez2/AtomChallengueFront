import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'home', // Define una ruta vacía para la página de inicio
    loadChildren: () => import("../app/landing/landing.module").then(m => m.LandingModule) // Asigna el componente "welcome" a la ruta
  },
  {path: 'toDoApp', loadChildren: () => import('../app/tasks/tasks.module').then(m => m.TasksModule)},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
  // Agrega otras rutas aquí según sea necesario
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
