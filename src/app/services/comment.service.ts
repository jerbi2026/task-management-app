import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = `${environment.apiUrl}/comments`;

  constructor(private http: HttpClient) { }

  // Create a new comment
  createComment(comment: Comment): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.apiUrl, comment);
  }

  // Get comments for a specific task
  getTaskComments(taskId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/task/${taskId}`);
  }

  // Get comment by ID
  getCommentById(commentId: string): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/${commentId}`);
  }

  // Update comment
  updateComment(commentId: string, commentData: Partial<Comment>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${commentId}`, commentData);
  }

  // Delete comment
  deleteComment(commentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${commentId}`);
  }
}