import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

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
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  captcha: any;
  userCaptchaInput: any;
  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder) {
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
      alert("login SucessFull");
      console.log(this.loginForm.value);
    } else {
      alert("Invalid Captch");
    }
    return;
  }
}
