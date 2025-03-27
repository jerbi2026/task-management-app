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
git clone https://github.com/yourusername/task-management-app.git
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
│   │   └── task-modal/
│   ├── services/
│   │   ├── user.service.ts
│   │   ├── task.service.ts
│   │   ├── category.service.ts
│   │   └── priority.service.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   └── models/
│       ├── user.model.ts
│       ├── task.model.ts
│       └── ...
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
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
![Sign Up Page](/screenshots/signup.png)

### 2. Task List Overview
![Task List](/screenshots/task-list.png)

### 3. Create New Task Modal
![Create Task](/screenshots/create-task.png)

### 4. Edit Task Modal
![Edit Task](/screenshots/edit-task.png)

### 5. Task Filtering
![Task Filtering](/screenshots/task-filter.png)

### 6. Responsive Mobile View
![Mobile View](/screenshots/mobile-view.png)

### 7. Task Priority Visualization
![Priority View](/screenshots/priority-view.png)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/task-management-app](https://github.com/yourusername/task-management-app)