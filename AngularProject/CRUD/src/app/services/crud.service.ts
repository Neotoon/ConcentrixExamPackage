import { HttpClient, HttpEvent} from '@angular/common/http';
import { HttpResponse} from 'src/app/crud/models/http-response';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../crud/models/employee';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private httpClient:HttpClient) { }

  loadEmployees(){
    //const url=environment.API_EndPoint + 'view.php';
    const url='http://localhost/web_api/view.php';
    return this.httpClient.get(url).pipe(map(data=>data))
  }

  createEmployee(data:any): Observable<HttpResponse> {
    const url='http://localhost/web_api/create.php';
    return this.httpClient.post<HttpResponse>(url,data).pipe(map(data=>data))
  }

  loadEmployeeDetails(employeeId:any): Observable<Employee> {
    const url='http://localhost/web_api/view_one.php?id='+employeeId;
    return this.httpClient.get<Employee>(url).pipe(map(data=>data))
  }
}
