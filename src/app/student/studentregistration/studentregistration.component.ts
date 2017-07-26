import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

}
