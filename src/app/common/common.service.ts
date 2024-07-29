import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private apiUrl =
    // "http://e74c-2402-e280-4117-34-79da-f2ad-e8d-c478.ngrok-free.app/users/register";

    "http://2605-2402-e280-4117-34-e11a-deac-2061-ac2e.ngrok-free.app/users/register";

  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:4200",
    });
    const body = { username, password };
    return this.http.post(`${environment.baseUrl}/register`, body, { headers });
  }
  loginUser(username: any, password: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    const body = { username, password };
    // return this.http.post(`${environment.baseUrl}/login`, body, { headers });

    return this.http.post(
      "http://5aff-2402-e280-4117-34-c9ea-b3d-6560-660a.ngrok-free.app/users/login",
      body,
      { headers }
    );
  }

  saveSchoolProfile(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    const body = { payload };
    return this.http.post(`${environment.baseUrl}/login`, body, { headers });
  }
  saveSchoolProfile2(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    const udiseId = "1234567890";
    const body = payload;
    return this.http.post(
      "http://5aff-2402-e280-4117-34-c9ea-b3d-6560-660a.ngrok-free.app/udise/schools/1234567890/form2",
      body,
      { headers }
    );
  }
  saveSchoolProfile1(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    const udiseId = "1234567890";
    const body = payload;
    return this.http.post(
      "http://5aff-2402-e280-4117-34-c9ea-b3d-6560-660a.ngrok-free.app/udise/schools/1234567890/form1",
      body,
      { headers }
    );
  }

  getProfileDataOne() {
    return this.http.get(
      "http://5aff-2402-e280-4117-34-c9ea-b3d-6560-660a.ngrok-free.app/udise/schools/1234567890/form2"
    );
  }
  getProfileDataForm1() {
    return this.http.get(
      "http://5aff-2402-e280-4117-34-c9ea-b3d-6560-660a.ngrok-free.app/udise/schools/1234567890/form1"
    );
  }
}
