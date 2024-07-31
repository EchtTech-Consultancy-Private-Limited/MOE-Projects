import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  sudise :any
  udiseCode :any
  private apiUrl =
    // "http://e74c-2402-e280-4117-34-79da-f2ad-e8d-c478.ngrok-free.app/users/register";

    "http://localhost:8080/users/register";

  constructor(private http: HttpClient) {


    if(localStorage.getItem("profile") ){
      const dise:any = localStorage.getItem("profile")
      this.sudise = JSON.parse(dise)
      this.udiseCode = this.sudise.udiseCode
    }
   
  }

  registerUser(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    
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
      "http://localhost:8080/login",
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
    
    const body = payload;
    return this.http.post(
      `http://localhost:8080/udise/schools/${this.udiseCode}/form2`,
      body,
      { headers }
    );
  }
  saveSchoolProfile1(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    
    const body = payload;
    return this.http.post(
      // "http://5aff-2402-e280-4117-34-c9ea-b3d-6560-660a.ngrok-free.app/udise/schools/16030601304/form1",
      `http://localhost:8080/udise/schools/${this.udiseCode}/form1`,
      body,
      { headers }
    );
  }

  getProfileDataOne() {
    return this.http.get(
      // "http://5aff-2402-e280-4117-34-c9ea-b3d-6560-660a.ngrok-free.app/udise/schools/16030601304/form2"
      `http://localhost:8080/udise/schools/${this.udiseCode}/form2`
    );
  }
  getProfileDataForm1() {
    console.log("${this.udiseCode}",this.udiseCode)
    return this.http.get(
      `http://localhost:8080/udise/schools/${this.udiseCode}/form1`
    );
  }
  getProfileData() {
    return this.http.get(
      "http://localhost:8080/users/info"
    );
  }
}
