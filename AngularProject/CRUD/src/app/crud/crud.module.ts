import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CRUDRoutingModule } from './crud-routing.module';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class CRUDModule { }
