import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: any=[];
  
  employeeListSubscribe:any;
  rowData:any = [];

  constructor(private employeesService:EmployeesService){}

  getEmployeeList(){
    this.employeeListSubscribe=this.employeesService.getAllEmployees().subscribe(res=>{
      this.employees=res;
      this.rowData=res;
    })
  }

  ngOninit(): void{
    this.getEmployeeList()
    // this.employeesService.getAllEmployees()
    // .subscribe({
    //   next: (Employees)=>{
    //     console.log(Employees);
    //     //this.employees=employees
    //   },
    //   error:(response)=>{
    //     console.log(response);
    //   }
    // })
  }
}
