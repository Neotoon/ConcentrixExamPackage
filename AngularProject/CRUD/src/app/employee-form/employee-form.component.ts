import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router:Router,
    private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.createEmployeeForm();
    let employeeId='';
    if(this.activatedRoute.snapshot.params['employeeId']){
      employeeId=this.activatedRoute.snapshot.params['employeeId'];
      if (employeeId!==''){
        this.loadEmployeeDetails(employeeId)
      }
    }
    
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

  loadEmployeeDetails(employeeId:any){
      this.crudSerice.loadEmployeeDetails(employeeId).subscribe(res=>{
        this.employeeForm.controls['name'].setValue(res.p_name);
        this.employeeForm.controls['address'].setValue(res.p_address);
        this.employeeForm.controls['email'].setValue(res.p_email);
        this.employeeForm.controls['contact'].setValue(res.p_contact);
      })
  }
}
