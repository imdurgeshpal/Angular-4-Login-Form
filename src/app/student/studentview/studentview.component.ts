import { Component, OnInit } from '@angular/core';
import  {Student}from '../studentmodel/student';
import {clone} from 'lodash';
import { Router } from '@angular/router';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
    students:Student[];
    newStudent:any={}; 
    editedStudent:any={};
    studentForm:boolean=false;
    editStudentForm:boolean=false;

  constructor(private studentService:StudentService, private router: Router) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents=function(){
    this.students=this.studentService.getStudentsFromData();
  }

  showEditStudentForm(student:Student){
  
    this.editedStudent=clone(student);
  }
    updateStudent(){
    this.studentService.updateStudent(this.editedStudent);
    // this.router.navigate(['/studentview']);
    this.editedStudent={};    
  }

   removeUser(student:Student){
    this.studentService.deleteStudent(student);
  }

}
