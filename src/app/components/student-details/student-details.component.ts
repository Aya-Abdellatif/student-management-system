import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student: any;
  isEdit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _studentsService: StudentsService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.student = this._studentsService.getStudentByID(id);
    //console.log(this.student);

    const mode = this.route.snapshot.queryParamMap.get('mode');
    //console.log("Mode is", mode);

    this.isEdit = mode === 'edit';

    if (!this.student) {
      this.router.navigate(['/students']);
    }
  }

  onDelete() {
    this._studentsService.deleteStudent(this.student.id);
    this.router.navigate(['/students']);
  }

  onUpdate(){
    this.isEdit = true;
  }

  onSave(){
    this._studentsService.editStudent(this.student);
    this.router.navigate([`./student/${this.student.id}`]);
    this.isEdit=false;
  }
}

