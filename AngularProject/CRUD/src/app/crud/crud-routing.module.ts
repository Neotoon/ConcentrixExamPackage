import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

const routes: Routes = [
  {path:'',redirectTo:'employee-list',pathMatch:'full'},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'create-employee',component:EmployeeFormComponent},
  {path:'update-employee/:employeeId',component:EmployeeFormComponent},
  {path:'view-employee-details/:employeeId',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
