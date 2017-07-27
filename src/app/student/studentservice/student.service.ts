import { Injectable } from '@angular/core';
import  {Student}from '../studentmodel/student';
import {clone} from 'lodash';
import {STUDENTS_PERSONS} from '../studentmodel/student-data';
import { findIndex } from 'lodash';

@Injectable()
export class StudentService {

  private spersons=STUDENTS_PERSONS;

  getStudentsFromData():Student[]{
    console.log(this.spersons);
    return this.spersons;
  }
  addStudent(student:Student){
    this.spersons.push(student);
    console.log(this.spersons);

  }

  updateStudent(student:Student){
    let index=findIndex(this.spersons,(u:Student)=>{
      return u.name=== student.name;
    })
    this.spersons[index]=student;
  }
   deleteStudent(student:Student){
    this.spersons.splice(this.spersons.indexOf(student),1);
    console.log(this.spersons);
  }
  constructor() { }

}
