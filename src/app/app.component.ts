import { Component } from '@angular/core';

export class Student{
	id: number;
	name: string;
}

const STUDENTS: Student[] = [
  { id: 1, name: 'Mahesh' },
  { id: 2, name: 'Anuradha' },
  { id: 3, name: 'Bandara' },
  { id: 4, name: 'Kumuduni' },
  { id: 5, name: 'Damayanthi' }
];


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
    <h2>Students list</h2>
    <ul class="students">
      <li *ngFor="let student of students"
        [class.selected]="student === selectedStudent"
        (click)="onSelect(student)">
        <span class="badge">{{student.id}}</span> {{student.name}}
      </li>
    </ul>

    <div *ngIf="selectedStudent">
      <h2>{{selectedStudent.name}} details!</h2>
      <div><label>id: </label>{{selectedStudent.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedStudent.name" placeholder="name"/>
      </div>
    </div>
    `
})
export class AppComponent  {
	title = "Student management system"
	students = STUDENTS;
	selectedStudent : Student;
	student : Student ={
		id:1,
		name : "Anuradha"
	} 

	onSelect(student:Student):void{
		this.selectedStudent = student;
	}
}
