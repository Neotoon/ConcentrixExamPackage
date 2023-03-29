import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../crud/models/employee';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  //@ts-ignore
  employeeDetails:Employee

  constructor(private crudSerice:CRUDService,
    private activatedRoute:ActivatedRoute){}
  ngOnInit(): void{
    let employeeId='';
    if(this.activatedRoute.snapshot.params['employeeId']){
      employeeId=this.activatedRoute.snapshot.params['employeeId'];
      if (employeeId!==''){
        this.loadEmployeeDetails(employeeId)
      }
    }
  }
  loadEmployeeDetails(employeeId:any){
    this.crudSerice.loadEmployeeDetails(employeeId).subscribe(res=>{
    this.employeeDetails=res;
      })
  }
}
