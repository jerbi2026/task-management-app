import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Priority } from '../models/priority.model';



@Injectable({
  providedIn: 'root'
})
export class PriorityService {
  private apiUrl = `${environment.apiUrl}/priorities`;

  constructor(private http: HttpClient) { }

  // Create a new priority
  createPriority(priority: Priority): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.apiUrl, priority);
  }

  // Get all priorities
  getPriorities(): Observable<Priority[]> {
    return this.http.get<Priority[]>(this.apiUrl);
  }

  // Get priority by ID
  getPriorityById(priorityId: string): Observable<Priority> {
    return this.http.get<Priority>(`${this.apiUrl}/${priorityId}`);
  }

  // Update priority
  updatePriority(priorityId: string, priorityData: Partial<Priority>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${priorityId}`, priorityData);
  }

  // Delete priority
  deletePriority(priorityId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${priorityId}`);
  }
}