import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

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
      department: "Electrical",
      level: 3,
      GPA: 3.2,
      enrollmentDate: "2023-09-01",
      isActive: true
    },
    {
      id: 2,
      firstName: "Sara",
      lastName: "Ahmed",
      age: 22,
      gender: "Female",
      email: "sara.ahmed@email.com",
      phone: "01111111111",
      address: "45 Nile Street",
      city: "Alexandria",
      country: "Egypt",
      department: "Mechatronics",
      level: 4,
      GPA: 3.6,
      enrollmentDate: "2022-09-01",
      isActive: true
    },
    {
      id: 3,
      firstName: "Omar",
      lastName: "Khaled",
      age: 20,
      gender: "Male",
      email: "omar.khaled@email.com",
      phone: "01222222222",
      address: "78 Tahrir Street",
      city: "Giza",
      country: "Egypt",
      department: "Industrial",
      level: 2,
      GPA: 2.9,
      enrollmentDate: "2024-09-01",
      isActive: false
    },
    {
      id: 4,
      firstName: "Mona",
      lastName: "Youssef",
      age: 23,
      gender: "Female",
      email: "mona.youssef@email.com",
      phone: "01533333333",
      address: "10 Corniche Road",
      city: "Alexandria",
      country: "Egypt",
      department: "Petrolchemicals",
      level: 4,
      GPA: 3.8,
      enrollmentDate: "2021-09-01",
      isActive: true
    },
    {
      id: 5,
      firstName: "Youssef",
      lastName: "Adel",
      age: 19,
      gender: "Male",
      email: "youssef.adel@email.com",
      phone: "01044444444",
      address: "25 University Street",
      city: "Mansoura",
      country: "Egypt",
      department: "Mechanical",
      level: 1,
      GPA: 2.7,
      enrollmentDate: "2025-09-01",
      isActive: false
    },
    {
      id: 6,
      firstName: "Nour",
      lastName: "Mahmoud",
      age: 21,
      gender: "Female",
      email: "nour.mahmoud@email.com",
      phone: "01155555555",
      address: "33 El Nasr Road",
      city: "Cairo",
      country: "Egypt",
      department: "Architectural",
      level: 3,
      GPA: 3.4,
      enrollmentDate: "2023-09-01",
      isActive: true
    }
  ];

  private studentsSubject = new BehaviorSubject<any[]>(this.students);

  students$ = this.studentsSubject.asObservable();

  constructor() { }

  addStudent(student: any) {
    const curr = this.studentsSubject.value;
    console.log(curr);

    student.id = curr.length + 1;

    this.studentsSubject.next([...curr, student]);
  }

  deleteStudent(id: number) {
    const afterDeleteStudent = this.studentsSubject.value.filter(s => s.id !== id);

    this.studentsSubject.next(afterDeleteStudent);
  }

  getStudentByID(id: number) {
    return this.studentsSubject.value.find(s => s.id === id);
  }

  editStudent(student: any) {
    const updatedStudent = this.studentsSubject.value.map(s =>
      s.id === student.id ? student : s
    );

    this.studentsSubject.next(updatedStudent);
  }
}
