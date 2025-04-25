import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`${environment.apiUrl}/employees`);
  }

  getById(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/employees/${id}`);
  }

  create(employee: any) {
    return this.http.post(`${environment.apiUrl}/employees`, employee);
  }

  update(id: number, employee: any) {
    return this.http.put(`${environment.apiUrl}/employees/${id}`, employee);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/employees/${id}`);
  }
}