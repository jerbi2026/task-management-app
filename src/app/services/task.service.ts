import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks/`;

  constructor(private http: HttpClient) { }

  // Create a new task
  createTask(task: Task): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.apiUrl, task);
  }

  // Get all tasks
  getTasks(filters?: any): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl, { params: filters });
  }

  // Get task by ID
  getTaskById(taskId: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${taskId}/`);
  }

  // Get tasks for a specific user
  getUserTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?utilisateur_id=${userId}/`);
  }

  // Update task
  updateTask(taskId: string, taskData: Partial<Task>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${taskId}/`, taskData);
  }

  // Delete task
  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}/`);
  }
}