import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private httpClient:HttpClient) { }

  loadEmployees(){
    const url=environment.API_EndPoint + 'view.php';
    return this.httpClient.get(url).pipe(map(data=>data))
  }
}
