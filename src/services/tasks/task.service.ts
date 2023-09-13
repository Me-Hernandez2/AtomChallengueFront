import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from 'src/environments/environment';
import {DefaultResponse, TaskItem} from 'src/app/tasks/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  addTask(payload: TaskItem): Observable<DefaultResponse> {
    const url = environment.API_BASE_URL + "addTask"
    return this.http.post<any>(url, payload);
  }

  updateTask(payload: TaskItem): Observable<DefaultResponse> {
    const url = environment.API_BASE_URL + "updateTask/" + payload.id
    return this.http.put<any>(url, payload);
  }

  getAllTasks(): Observable<DefaultResponse> {
    const url = environment.API_BASE_URL + 'getAllTasks';
    return this.http.get<any>(url);
  }

  deleteTask(task: TaskItem): Observable<DefaultResponse> {
    const url = environment.API_BASE_URL + "deleteTask/" + task.id
    return this.http.delete<any>(url);
  }
}
