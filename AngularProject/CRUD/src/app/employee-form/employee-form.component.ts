import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  //@ts-ignore
  employeeForm:FormGroup;

  constructor(private crudSerice:CRUDService, 
    private formBuilder:FormBuilder,
    private router:Router){}

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
    let formData =new FormData();
    formData.append('name',values.name);
    formData.append('address',values.address);
    formData.append('email',values.email);
    formData.append('contact',values.contact);

    if(isUpdate){
      //updating
    }
    else
    {
      this.crudSerice.createEmployee(formData).subscribe(res=>{
        if (res.result==='success'){
          this.router.navigate(['/crud/employee-list']);
        }
      });
    }
  }
}
