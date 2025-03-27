# Task Management Application

## Overview

This is a simple Task Management Application built with Angular, designed to help users create, track, and manage their tasks efficiently. The application provides features like user registration, task creation, filtering, and basic task management.

## Features

- User Registration
- Create, Edit, and Delete Tasks
- Task Filtering by Category and Priority
- Responsive Design
- Simple and Intuitive Interface

## Technologies Used

- Angular
- TypeScript
- RxJS
- Tailwind CSS
- Angular Reactive Forms

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 16.x or later)
- npm (version 8.x or later)
- Angular CLI (version 14.x or later)

## Installation

1. Clone the repository
```bash
git clone https://github.com/jerbi2026/task-management-app.git
cd task-management-app
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── signup/
│   │   ├── task-list/
│   │   └── task-form-dialog/
│   ├── services/
│   │   ├── user.service.ts
│   │   ├── task.service.ts
│   │   ├── category.service.ts
│   │   └── priority.service.ts
|   |   └── auth.guard.ts
│   │   
│   └── models/
│       ├── user.model.ts
│       ├── task.model.ts
│       └── ...
├── environments/
│   └── environment.ts
└── ...
```

## Authentication

The application uses a simple local storage-based authentication mechanism. Users can sign up and are automatically logged in, with routes protected by an AuthGuard.

## API Integration

The application integrates with a backend API for:
- User registration
- Task CRUD operations
- Category and Priority management

## Deployment

To build the project for production:
```bash
ng build --configuration=production
```

## Screenshots

### 1. Sign Up Page
![sign up](https://github.com/user-attachments/assets/76c68447-0ac3-4a2f-9a9d-ff4e33ed5abc)

### 2. Task List Overview
![taskboard](https://github.com/user-attachments/assets/fc9f1b5c-e736-4900-a878-7c7d0c7a3c6e)

### 3. Create New Task Modal
![task](https://github.com/user-attachments/assets/ba86dfae-3279-4b1f-9526-1776e66f21f0)

### 4. Edit Task Modal
![edit task](https://github.com/user-attachments/assets/b2d2c9b7-044c-412b-a36b-3f16f3b18872)

### 5. Task Filtering
![filter 2](https://github.com/user-attachments/assets/cdc0e4cd-0f56-4579-8f43-f4d3eb79cff6)

### 6. Task Priority Visualization
![filter1](https://github.com/user-attachments/assets/3442b3d9-088e-4587-8f48-4d174761aa80)




## Contact

Jerbi Ahmed - jerbiahmed24@gmail.com

Project Link: [https://github.com/jerbi2026/task-management-app](https://github.com/jerbi2026/task-management-app)
