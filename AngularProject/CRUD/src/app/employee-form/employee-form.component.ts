import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  //@ts-ignore
  employeeForm:FormGroup

  constructor(private crudSerice:CRUDService, private formBuilder:FormBuilder){}

  createProductForm(){
    this.employeeForm=this.formBuilder.group({
      'name':[''],
      'address':[''],
      'email':[''],
      'contactnumber':[''],
      'contact':[''],
    })
  }
}
