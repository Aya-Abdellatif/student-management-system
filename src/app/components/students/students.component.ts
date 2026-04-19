import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(private _studentsService: StudentsService){}

  students$ = this._studentsService.students$;

  deleteStudent(id: number){
    this._studentsService.deleteStudent(id);
  }

}
