
# Student Management System

A simple **Student Management System** built using Angular 16.  
This project demonstrates core Angular concepts such as routing, services, observables, component communication, and CRUD operations.

---

# Live Demo
[https://your-username.github.io/student-management-system/
](https://aya-abdellatif.github.io/student-management-system/home)
---

# Features

- Display all students in a table
- Add new student
- View student details
- Edit student information
- Delete student
- Search students by name
- Filter students by department
- Reactive UI updates using BehaviorSubject
- Real-time data sync across components

---

# Technologies Used

- Angular 16
- TypeScript
- RxJS (BehaviorSubject, Observables)
- HTML5 / CSS3
- Bootstrap
- Angular Router

---

# Project Structure

```

src/app/
│
├── components/
│   ├── navbar/
│   ├── students/
│   ├── student-table/
│   ├── add-student/
│   └── student-details/
│
├── services/
│   └── students.service.ts


````


# Core Concepts Used

### Component Communication
- `@Input()` → Parent to Child
- `@Output()` → Child to Parent

### State Management
- BehaviorSubject for shared students data
- Observable + Async Pipe

### Routing
- `/students` → Students list
- `/add-student` → Add student form
- `/student/:id` → Student details page

---

# Installation & Setup

### 1️ Clone repo

```bash
git clone https://github.com/your-username/student-management-system.git
```

### 2️ Install dependencies

```bash
npm install
```

### 3️ Run project

```bash
ng serve
```

Then open:

```
http://localhost:4200
```

---

# Future Improvements

* Login / Authentication system
* Backend integration (Node.js / .NET API)
* Pagination for large data
* Advanced filtering & sorting
* Role-based access (Admin / Student)

---

# Author

**Aya Abdellatif**
