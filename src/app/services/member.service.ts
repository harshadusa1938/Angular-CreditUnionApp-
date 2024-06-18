import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://localhost:8080/api/v1/accounts';

  constructor(private http: HttpClient) { }

  createMember(member: any): Observable<any> {
    return this.http.post(this.baseUrl, member);
  }

  searchMember(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search`, { params: { query } });
  }
}
