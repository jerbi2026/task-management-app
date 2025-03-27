import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) { }

  // Create a new category
  createCategory(category: Category): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.apiUrl, category);
  }

  // Get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  // Get category by ID
  getCategoryById(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${categoryId}`);
  }

  // Update category
  updateCategory(categoryId: string, categoryData: Partial<Category>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${categoryId}`, categoryData);
  }

  // Delete category
  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${categoryId}`);
  }
}