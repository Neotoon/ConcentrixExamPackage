import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string='https://localhost:7047';
  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/employees');
  }

  addEmployee(addEmployeeRequest:Employee): Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl+'/api/employees',addEmployeeRequest)
  }

  getEmployee(id:string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/employees/'+ id);
  }

  updateEmployee(id:String, updateEmployee:Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/api/employees/'+ id,updateEmployee)
  }
}
