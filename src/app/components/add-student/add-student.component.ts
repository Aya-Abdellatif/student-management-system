import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private _studentsService: StudentsService, private router: Router,
  ) { }

  newStudent = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    department: '',
    level: 1,
    GPA: 0,
    enrollmentDate: '',
    isActive: true

  };

  addStudent() {
    this._studentsService.addStudent(this.newStudent);
    this.reset();

    this.router.navigate(["./students"]);

  }

  reset() {
    this.newStudent = {
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      department: '',
      level: 1,
      GPA: 0,
      enrollmentDate: '',
      isActive: true

    };

  }
}
