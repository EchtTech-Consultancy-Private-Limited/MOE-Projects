import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HeaderComponent } from "../../common/header/header.component";
import Swal from "sweetalert2";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { AlertServiceService } from "../../common/aleart.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  captcha: any;
  userCaptchaInput: any;
  loginForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private _aleartService: AlertServiceService
  ) {
    this.loginForm = this._fb.group({
      userName: [""],
      password: [""],
      captcha: [""],
    });
  }

  ngOnInit() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    this.captcha = Math.random().toString(36).substring(2, 8);
  }

  refreshCaptcha() {
    this.generateCaptcha();
  }

  validateCaptcha() {
    if (this.captcha === this.loginForm.get("captcha")?.value) {
      this._aleartService.swalPopSuccess("Login SuccessFully");
      console.log(this.loginForm.value);
      this._route.navigateByUrl("/dashboard");
    } else {
      this._aleartService.swalPopError("Invalid Captch");
    }
    return;
  }
}
