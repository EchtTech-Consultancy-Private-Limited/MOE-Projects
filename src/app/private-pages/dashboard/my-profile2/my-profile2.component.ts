import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ProfileHeaderComponent } from "../../../common/profile-header/profile-header.component";
import { RouterLink } from "@angular/router";
import { MatRadioModule } from "@angular/material/radio";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { CommonService } from "../../../common/common.service";
import { AlertServiceService } from "../../../common/aleart.service";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-my-profile2",
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatSelectModule,
    ProfileHeaderComponent,
    RouterLink,
    MatRadioModule,
  ],
  templateUrl: "./my-profile2.component.html",
  styleUrl: "./my-profile2.component.scss",
})
export class MyProfile2Component implements OnInit {
  submitForm: FormGroup;
  formtwoData: any;
  constructor(
    private _fb: FormBuilder,
    private _commonService: CommonService,
    private _aleartService: AlertServiceService,
    private _router: Router
  ) {
    this.submitForm = this.getFormControls();
    this.myProfileDataOne();
  }
  ngOnInit() {}

  myProfileDataOne() {
    this._commonService.getProfileDataOne().subscribe(
      (data) => {
        console.log("data naved", data);
        this.formtwoData = data;
        this.submitForm
          .get("isShiftSchool")
          ?.patchValue(this.formtwoData.isShiftSchool);
        this.submitForm
          .get("isResidentialSchool")
          ?.patchValue(this.formtwoData.isResidentialSchool);
        this.submitForm
          .get("isMinorityManaged")
          ?.patchValue(this.formtwoData.isMinorityManaged);
        this.submitForm
          .get("isMotherTongueTaughtPrimary")
          ?.patchValue(this.formtwoData.isMotherTongueTaughtPrimary);
        this.submitForm
          .get("offersPreVocationalTraining")
          ?.patchValue(this.formtwoData.hasAfterHoursTraining);
        this.submitForm
          .get("hasAfterHoursTraining")
          ?.patchValue(this.formtwoData.hasAfterHoursTraining);
        this.submitForm
          .get("distanceFromPrimary")
          ?.patchValue(this.formtwoData.distanceFromPrimary);
        this.submitForm
          .get("distanceFromUprPrimary")
          ?.patchValue(this.formtwoData.distanceFromUprPrimary);
        this.submitForm
          .get("distanceFromSecondary")
          ?.patchValue(this.formtwoData.distanceFromSecondary);
        this.submitForm
          .get("distanceFromHS")
          ?.patchValue(this.formtwoData.distanceFromHS);
        this.submitForm
          .get("hasAllWeatherRoads")
          ?.patchValue(this.formtwoData.hasAllWeatherRoads);
        this.submitForm
          .get("instructionalDaysNo")
          ?.patchValue(this.formtwoData.instructionalDaysNo);
        this.submitForm.get("isCCE")?.patchValue(this.formtwoData.isCCE);
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  }

  getFormControls() {
    return this._fb.group({
      isShiftSchool: ["", Validators.required],
      isResidentialSchool: ["", Validators.required],
      isMinorityManaged: ["", Validators.required],
      isMotherTongueTaughtPrimary: ["", Validators.required],
      offersPreVocationalTraining: ["", Validators.required],
      hasAfterHoursTraining: ["", Validators.required],
      distanceFromPrimary: ["", Validators.required],
      distanceFromUprPrimary: ["", Validators.required],
      distanceFromSecondary: ["", Validators.required],
      distanceFromHS: ["", Validators.required],
      hasAllWeatherRoads: ["", Validators.required],
      instructionalDaysNo: ["", Validators.required],
      isCCE: ["", Validators.required],
    });
  }

  submitData() {
    if (this.submitForm.invalid) {
      this._aleartService.swalPopError("Please Fill Required Fields");
      this.submitForm.markAllAsTouched();
      return;
    } else {
      console.log(this.submitForm.value);
      const payload = {
        udiseCode: "2134573",
        isShiftSchool: this.submitForm.value.isShiftSchool,
        isResidentialSchool: this.submitForm.value.isResidentialSchool,
        isMinorityManaged: this.submitForm.value.isMinorityManaged,
        isMotherTongueTaughtPrimary:
          this.submitForm.value.isMotherTongueTaughtPrimary,
        offersPreVocationalTraining:
          this.submitForm.value.offersPreVocationalTraining,
        hasAfterHoursTraining: this.submitForm.value.hasAfterHoursTraining,
        // distanceFromPrimary: this.submitForm.value.distanceFromPrimary,
        distanceFromPrimary: 0.1,
        // distanceFromUprPrimary: this.submitForm.value.distanceFromUprPrimary,
        distanceFromUprPrimary: 0.5,
        // distanceFromSecondary: this.submitForm.value.distanceFromSecondary,
        distanceFromSecondary: 0.1,
        // distanceFromHS: this.submitForm.value.distanceFromHS,
        distanceFromHS: 0.2,
        hasAllWeatherRoads: this.submitForm.value.hasAllWeatherRoads,
        instructionalDaysNo: +this.submitForm.value.instructionalDaysNo,
        isCCE: this.submitForm.value.isCCE,
      };
      console.log("PAYLOAD==>", payload);
      this._commonService.saveSchoolProfile2(payload).subscribe({
        next: (res) => {
          console.log("shubham==>", res);
          this._aleartService.swalPopSuccess("Data Saved Successfully");
          this._router.navigateByUrl("/dashboard");
        },
        error: (err) => {
          this._aleartService.swalPopError("Failed");
          console.log(err);
        },
      });
    }
  }
}
