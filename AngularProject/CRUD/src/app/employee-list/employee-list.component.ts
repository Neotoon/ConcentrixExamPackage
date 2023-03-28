import { Component } from '@angular/core';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  columnDefs = [
    { field: 'p_id', headerName:'Employee ID', sortable:true,headerClass:'header-cell'},
    { field: 'p_name', headerName:'Employee Name', sortable:true,headerClass:'header-cell'},
    { field: 'p_address', headerName:'Address', sortable:true,headerClass:'header-cell'},
    { field: 'p_email', headerName:'Email Address', sortable:true,headerClass:'header-cell'},
    { field: 'p_contact', headerName:'Contact Number', sortable:true,headerClass:'header-cell'},
    { field: '', headerName:'Actions',width:250,headerClass:'header-cell',cellRenderer:this.actionRender},
  ];

  rowData:any = [];
  gridOptions={
    rowHeight:50
  }

  employeeList:any=[]; 
  employeeListSubscribe:any;

  constructor(private crudService:CRUDService){}

  ngOnInit(): void{
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.employeeListSubscribe=this.crudService.loadEmployees().subscribe(res=>{
      this.employeeList=res;
      this.rowData=res;
    })
  }

  actionRender(params:any){
    let div = document.createElement('div');
    let htmlCode= '<button type="button" class="btn btn-success">View</button>\n'+
    '<button type="button" class="btn btn-danger">Delete</button>\n'+
    '<button type="button" class="btn btn-warning">Edit</button>'
    div.innerHTML=htmlCode;
    return div;
  }
}
