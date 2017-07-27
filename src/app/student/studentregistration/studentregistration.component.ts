import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentservice/student.service';
import  {Student}from '../studentmodel/student';
import {clone} from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {
  students:Student[];
  newStudent:any={}; 
  constructor(private studentService:StudentService, private router: Router) { }

  ngOnInit() {
  }

  registerStudent=function(student:Student){
   
     this.studentService.addStudent(student);
      this.router.navigate(['/studentview']);
  }

}
