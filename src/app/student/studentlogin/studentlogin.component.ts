import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  constructor(private studentService:StudentService ) { }

  ngOnInit() {
  }

}
