import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Category } from '../models/category.model';
import { Priority } from '../models/priority.model';
import { Task } from '../models/task.model';
import { CategoryService } from '../services/category.service';
import { PriorityService } from '../services/priority.service';
import { TaskService } from '../services/task.service';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  categories: Category[] = [];
  priorities: Priority[] = [];
  
  isModalOpen = false;
  currentTask: Task | null = null;

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService,
    private priorityService: PriorityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadTasks();
    this.loadCategories();
    this.loadPriorities();
  }

  loadTasks() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.taskService.getUserTasks(currentUser._id).subscribe(tasks => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredTasks = this.tasks.filter(task => 
      task.titre.toLowerCase().includes(filterValue)
    );
  }

  filterByCategory(event: Event) {
    const categoryId = (event.target as HTMLSelectElement).value;
    this.filteredTasks = categoryId 
      ? this.tasks.filter(task => task.categorie_id === categoryId)
      : this.tasks;
  }

  filterByPriority(event: Event) {
    const priority = (event.target as HTMLSelectElement).value;
    this.filteredTasks = priority
      ? this.tasks.filter(task => task.priorite === priority)
      : this.tasks;
  }

  openTaskModal(task?: Task) {
    this.currentTask = task || null;
    this.isModalOpen = true;
  }

  closeTaskModal() {
    this.isModalOpen = false;
    this.currentTask = null;
  }

  saveTask(task: Task) {
    if (task._id) {
      this.taskService.updateTask(task._id, task).subscribe(() => {
        this.loadTasks();
        this.closeTaskModal();
      });
    } else {
      this.taskService.createTask(task).subscribe(() => {
        this.loadTasks();
        this.closeTaskModal();
      });
    }
  }

  editTask(task: Task) {
    this.openTaskModal(task);
  }

  deleteTask(task: Task) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task._id!).subscribe(() => {
        this.loadTasks();
      });
    }
  }
}