import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../models/category.model';
import { Priority } from '../models/priority.model';
import { Task } from '../models/task.model';
import { CategoryService } from '../services/category.service';
import { PriorityService } from '../services/priority.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss']
})
export class TaskFormDialogComponent {
  @Input() task: Task | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Task>();

  taskForm: FormGroup;
  categories: Category[] = [];
  priorities: Priority[] = [];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private priorityService: PriorityService
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.taskForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      date_echeance: [null],
      categorie_id: ['', Validators.required],
      priorite: ['', Validators.required],
      statut: ['en cours', Validators.required],
      utilisateur_id: [currentUser._id, Validators.required]
    });

    this.loadCategories();
    this.loadPriorities();

    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

  loadPriorities() {
    this.priorityService.getPriorities().subscribe(
      priorities => this.priorities = priorities
    );
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskData = this.task 
        ? { ...this.task, ...this.taskForm.value } 
        : this.taskForm.value;
      this.save.emit(taskData);
    }
  }

  onOverlayClick(event: MouseEvent) {
    this.close.emit();
  }

}
