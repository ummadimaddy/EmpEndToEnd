import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from './Employe';
import { Observable, BehaviorSubject } from 'rxjs';
import {Response} from './Response.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  public Employe = [];
  url = 'http://localhost:3000/api/employes';

  constructor(private http: HttpClient) {}

  private updateData = new BehaviorSubject(null);
  currentData = this.updateData.asObservable();

  putData(data) {
    this.updateData.next(data);
  }

  listEmployees(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }

  uploadEmploye(emp: Employe): Observable<Response> {
    return this.http.post<Response>(this.url, emp);
  }

  updateEmploye(id: string, employe: Employe): Observable<Response> {
    const baseurl = `${this.url}/${id}`;
    console.log(baseurl);
    console.log(employe);
    return this.http.put<Response>(baseurl, employe);
  }

  removeEmploye(id: string): Observable<Response> {
    const baseurl = `${this.url}/${id}`;
    return this.http.delete<Response>(baseurl);
  }
}
