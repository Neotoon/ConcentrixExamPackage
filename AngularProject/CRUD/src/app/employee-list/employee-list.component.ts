import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    { field: 'p_contact', headerName:'Contact Number', sortable:true,headerClass:'header-cell',cellRenderer:this.contactCellRender.bind(this)},
    { field: '', headerName:'Actions',width:250,headerClass:'header-cell',cellRenderer:this.actionRender.bind(this)},
  ];

  rowData:any = [];
  gridOptions={
    rowHeight:50
  }

  employeeList:any=[]; 
  employeeListSubscribe:any;

  constructor(private crudService:CRUDService, private router:Router){}

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

    //view button
    let viewButton=div.querySelector('.btn-success');
    viewButton?.addEventListener('click',()=>{
      this.viewEmployeeDetails(params)
    })

     //edit button
     let editButton=div.querySelector('.btn-warning');
     editButton?.addEventListener('click',()=>{
       this.editEmployeeDetails(params)
     })

     //delete button
     let deleteButton=div.querySelector('.btn-danger');
     deleteButton?.addEventListener('click',()=>{
       this.deleteEmployee(params)
     })
    return div;
  }

  viewEmployeeDetails(params: any){
    this.router.navigate(['/crud/view-employee-details/'+params.data.p_id]);
  }

  editEmployeeDetails(params:any){
    this.router.navigate(['/crud/update-employee/'+params.data.p_id]);
  }

  deleteEmployee(params:any){
    const that=this;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result:any) => {
      if (result.isConfirmed) {
        that.crudService.deleteEmployee(params.data.p_id).subscribe(res=>{
          if(res.result==='success'){
            this.getEmployeeList()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }

  contactCellRender(params:any){
    return '+'+params.data.p_contact;
  }
}
