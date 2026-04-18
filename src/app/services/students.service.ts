import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // dummy data
  private students = [
    {
      id: 1,
      firstName: "Ali",
      lastName: "Hassan",
      age: 21,
      gender: "Male",
      email: "ali.hassan@email.com",
      phone: "01000000000",
      address: "12 Main Street",
      city: "Cairo",
      country: "Egypt",
      department: "Computer Science",
      level: 3,
      GPA: 3.2,
      enrollmentDate: "2023-09-01",
      isActive: true
    }
  ]

  private studentsSubject = new BehaviorSubject<any[]>(this.students);

  students$ = this.studentsSubject.asObservable();

  constructor() { }
}
