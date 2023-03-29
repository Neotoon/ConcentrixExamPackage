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
      'name':['',Validators.compose([Validators.required])],
      'address':['',Validators.compose([Validators.required])],
      'email':['',Validators.compose([Validators.required])],
      'contact':['',Validators.compose([Validators.required])],
    })
  }

  createEmployee(values : any,isUpdate : any){
    console.log(values);
  }
}
