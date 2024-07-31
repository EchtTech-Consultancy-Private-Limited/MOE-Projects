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
import { CommonService } from "../../common/common.service";

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
  invalid: any;
  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private _aleartService: AlertServiceService,
    private _commonService: CommonService
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

  //   register() {
  //     this._commonService.registerUser("testSubm222", "test@123").subscribe(
  //       (response) => {
  //         console.log("User registered successfully", response);
  //       },
  //       (error) => {
  //         console.error("Error registering user", error);
  //       }
  //     );
  //   }

  //   validateCaptcha() {
  //     console.log("this.loginForm.value", this.loginForm);
  //     const userName = this.loginForm.value.userName;
  //     const password = this.loginForm.value.password;
  //     if (this.captcha === this.loginForm.get("captcha")?.value) {
  //       alert("1");
  //       this._commonService.loginUser(userName, password).subscribe((res) => {
  //         console.log("shubham", res);
  //         alert("2");
  //         this._aleartService.swalPopSuccess("Login SuccessFully");

  //         // this._route.navigateByUrl("/dashboard");
  //       });
  //     } else {
  //       this._aleartService.swalPopError("Invalid Captch");
  //     }
  //     return;
  //   }

  validateCaptcha() {
    console.log("this.loginForm.value", this.loginForm.value);

    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    const captchaValue = this.loginForm.get("captcha")?.value;

    if (this.captcha === captchaValue) {
      this._commonService.loginUser(userName, password).subscribe({
        next: (res) => {
          console.log("shubham", res);
          this._aleartService.swalPopSuccess("Login Successfully");
          sessionStorage.setItem("token", res.token);
          this._route.navigateByUrl("/dashboard");
        },
        error: (err) => {
          console.error("Login Error:", err);
          this.generateCaptcha();
          // this._aleartService.swalPopError("Invalid Username/Password, Please check !");
          this.invalid = "Invalid Username/Password, Please check !"
          setTimeout(() => {
            this.invalid = '';
          }, 5000);
          return;
        },
      });
    } else {
      this._aleartService.swalPopError("Invalid Captcha");
    }
  }
}
