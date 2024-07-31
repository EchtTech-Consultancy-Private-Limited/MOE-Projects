import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon"; // Import MatIconModule
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { AlertServiceService } from "../aleart.service";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-profile-header",
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule,CommonModule],
  templateUrl: "./profile-header.component.html",
  styleUrls: ["./profile-header.component.scss"],
})
export class ProfileHeaderComponent implements OnInit {
  @ViewChild("sidenav") sidenav!: MatSidenav;
  profile : any
  pro:boolean = false;
  constructor(
    private _router: Router,
    private _aleartService: AlertServiceService
  ) {
    
    if(localStorage.getItem("profile")){
      const data:any = localStorage.getItem("profile")
      this.profile = JSON.parse(data)
      console.log("this.profile",this.profile)
    }
    if(sessionStorage.getItem("token")){
      this.pro =  true;
    }


  }
  ngOnInit(): void {}

  // Method to toggle the sidenav
  toggleSidenav() {
    this.sidenav.toggle();
  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setTimeout(() => {
      this._router.navigateByUrl("/");
      window.location.reload();
    }, 0);
    //this._aleartService.swalPopSuccess("Logout Successfully");
  }
}
