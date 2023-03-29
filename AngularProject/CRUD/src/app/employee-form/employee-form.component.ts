import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  //@ts-ignore
  employeeForm:FormGroup;

  constructor(private crudSerice:CRUDService, private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.createEmployeeForm();
  }

  createEmployeeForm(){
    this.employeeForm=this.formBuilder.group({
      'name':['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
      'address':['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(500)])],
      'email':['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
      'contact':['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
    })
  }

  createEmployee(values : any,isUpdate : any){
    console.log(values);
  }
}
