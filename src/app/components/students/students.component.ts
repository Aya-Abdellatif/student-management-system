import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(private _studentsService: StudentsService) { }
  students$ = this._studentsService.students$;

  deleteStudent(id: number) {
    this._studentsService.deleteStudent(id);
  }

  searchName: string = '';
  selectedDepartment: string = '';

  applyFilter() {
    return this.students$ = this._studentsService.students$.pipe(
      map(students => students.filter(s => {
        const fullName = (s.firstName + ' ' + s.lastName).toLowerCase();
        console.log(fullName);
        
        const matchesSearch =
          fullName.includes(this.searchName.toLowerCase());

        const matchesDepartment =
          this.selectedDepartment === '' ||
          s.department === this.selectedDepartment;

        return matchesSearch && matchesDepartment;
      }))
    );
  }

}
