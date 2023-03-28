import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  columnDefs = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price'}
  ];

  rowData = [
    {make:'Toyota',model:'Celica',price:35000},
    {make:'Ford',model:'Mondeo',price:32000},
    {make:'Porche',model:'Boxter',price:72000},
  ];
}
