import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon"; // Import MatIconModule
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { AlertServiceService } from "../aleart.service";
@Component({
  selector: "app-profile-header",
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule],
  templateUrl: "./profile-header.component.html",
  styleUrls: ["./profile-header.component.scss"],
})
export class ProfileHeaderComponent implements OnInit {
  @ViewChild("sidenav") sidenav!: MatSidenav;
  constructor(
    private _router: Router,
    private _aleartService: AlertServiceService
  ) {}
  ngOnInit(): void {}

  // Method to toggle the sidenav
  toggleSidenav() {
    this.sidenav.toggle();
  }
  logout() {
    setTimeout(() => {
      this._router.navigateByUrl("/");
    }, 0);
    //this._aleartService.swalPopSuccess("Logout Successfully");
  }
}
