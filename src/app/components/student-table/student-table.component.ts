import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  @Input() students: any[] = [];

  @Output() delete = new EventEmitter<number>();
  onDelete(id: number) {
    this.delete.emit(id);
  }
}
