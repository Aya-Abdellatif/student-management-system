import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _studentsService: StudentsService) { }
  students$ = this._studentsService.students$.pipe(
    map(students => students.slice(0, 4))
  );
}
