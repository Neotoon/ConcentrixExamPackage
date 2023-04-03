import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employees: Employee[]=[
    {
      id:'1',
      name:'John Doe',
      email: 'john.doe@email.com',
      phone: 998877665,
      address: 'Human Resources'
    },
    {
      id:'2',
      name:'Sameer Saini',
      email: 'sameer.saini@email.com',
      phone: 789789789,
      address: 'Information Technology'
    },
    {
      id:'3',
      name:'Samantha James',
      email: 'samantha.james@email.com',
      phone: 8787878787,
      address: 'Accounting'
    }
  ]

  ngOninit():void{
  }
}
