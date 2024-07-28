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
} from "@angular/forms";

import { CommonService } from "../../../common/common.service";
import { AlertServiceService } from "../../../common/aleart.service";

@Component({
  selector: "app-my-profile2",
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
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
  ngOnInit() {
    // this.myProfileDataOne();
  }

  myProfileDataOne() {
    this._commonService.getProfileDataOne().subscribe(
      (data) => {
        console.log("data", data);
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
      isShiftSchool: [""],
      isResidentialSchool: [""],
      isMinorityManaged: [""],
      isMotherTongueTaughtPrimary: [""],
      offersPreVocationalTraining: [""],
      hasAfterHoursTraining: [""],
      distanceFromPrimary: [""],
      distanceFromUprPrimary: [""],
      distanceFromSecondary: [""],
      distanceFromHS: [""],
      hasAllWeatherRoads: [""],
      instructionalDaysNo: [""],
      isCCE: [""],
    });
  }

  submitData() {
    console.log(this.submitForm.value);
    const payload = {
      udiseCode: "1234567890",
      isShiftSchool: this.submitForm.value.isShiftSchool,
      isResidentialSchool: this.submitForm.value.isResidentialSchool,
      isMinorityManaged: this.submitForm.value.isMinorityManaged,
      isMotherTongueTaughtPrimary:
        this.submitForm.value.isMotherTongueTaughtPrimary,
      offersPreVocationalTraining:
        this.submitForm.value.offersPreVocationalTraining,
      hasAfterHoursTraining: this.submitForm.value.hasAfterHoursTraining,
      distanceFromPrimary: this.submitForm.value.distanceFromPrimary,
      distanceFromUprPrimary: this.submitForm.value.distanceFromUprPrimary,
      distanceFromSecondary: this.submitForm.value.distanceFromSecondary,
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
        this._router.navigateByUrl("/my-profile");
      },
      error: (err) => {
        this._aleartService.swalPopError("Failed");
        console.log(err);
      },
    });
  }
}
