import { Component , Input , OnInit } from '@angular/core';
import {Student} from './student';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {StudentService} from './student-service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'student-detail',
  templateUrl:'./student-detail.component.html'
})
export class StudentDetailComponent implements OnInit{
	@Input() student: Student;

	constructor(
	  private studentService: StudentService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.studentService.getStudent(+params['id']))
	    .subscribe(student => this.student = student);
	}

	goBack(): void {
	  this.location.back();
	}
}