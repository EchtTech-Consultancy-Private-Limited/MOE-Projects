import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ProfileHeaderComponent } from "../../../common/profile-header/profile-header.component";
import { RouterLink } from "@angular/router";
import { MatRadioModule } from "@angular/material/radio";
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { DateAdapter, MatNativeDateModule } from "@angular/material/core";
import { AlertServiceService } from "../../../common/aleart.service";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonService } from "../../../common/common.service";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-my-profile",
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    ProfileHeaderComponent,
    CommonModule,
    RouterLink,
    MatInputModule,
    MatRadioModule,
  ],
  templateUrl: "./my-profile.component.html",
  styleUrl: "./my-profile.component.scss",
})
export class MyProfileComponent implements OnInit {
  submitForm: FormGroup;
  formOneData: any;
  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private _aleartService: AlertServiceService,
    private _commonService: CommonService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.submitForm = this.getFormControls();
    this.myProfileDataTwo();
    this.dateAdapter.setLocale("en-GB");
  }
  ngOnInit(): void {}

  myProfileDataTwo() {
    this._commonService.getProfileDataForm1().subscribe(
      (data) => {
        console.log("data naved hulk", data);
        this.formOneData = data;
        // this.submitForm
        //   .get("isShiftSchool")
        //   ?.patchValue(this.formOneData.isShiftSchool);
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  }
  getFormControls() {
    return this._fb.group({
      schoolName: ["", Validators.required],
      districtName: ["", Validators.required],
      udiseBlockName: ["", Validators.required],
      schoolLocationType: ["", Validators.required],
      revenueBlock: ["", Validators.required],
      villName: ["", Validators.required],
      gramPanchName: ["", Validators.required],
      urbanLB: ["", Validators.required],
      wardName: ["", Validators.required],
      schoolAddress: ["", Validators.required],
      pinCode: ["", Validators.required],
      crcName: ["", Validators.required],
      asmblyConstName: ["", Validators.required],
      parlmntConstName: ["", Validators.required],
      latitude: [""],
      longitude: [""],
      stdCode: ["", Validators.required],
      landlineNo: ["", Validators.required],
      mobileNo: ["", Validators.required],
      email: ["", Validators.required],
      website: ["", Validators.required],
      hos: ["", Validators.required],
      hosName: [""],
      hosMobNo: ["", Validators.required],
      hosEmail: ["", Validators.required],
      schoolManagementGroup: ["", Validators.required],
      schoolManagementCode: [""],
      schoolCategoryCode: ["", Validators.required],
      schoolType: [""],
      affiliationBoardSS: [""],
      affiliationBoardHS: [""],
      respondentType: [""],
      respondentName: ["", Validators.required],
      respondentMobNo: ["", Validators.required],
      respondentEmail: ["", Validators.required],
      sessionStartDate: ["", Validators.required],
      sessionEndDate: ["", Validators.required],
      yoe: ["", Validators.required],
      // yor: ["", Validators.required],
      yorPrimary: ["", Validators.required],
      yorUpperPrimary: ["", Validators.required],
      yorSecondary: ["", Validators.required],
      yorHSecondary: ["", Validators.required],
      youPrToUpr: [""],
      youUprToScr: [""],
      youScrToHscr: [""],
      isCWSN: ["", Validators.required],
      geographical_location: ["", Validators.required],
      nodal_ministry_dept: ["", Validators.required],
      upgradation_primary: ["", Validators.required],
      upgradation_upper_primary: ["", Validators.required],
      upgradation_secondary: ["", Validators.required],
      hosInchargeTypeD: ["", Validators.required],
      managementGroupOfSchoolD: ["", Validators.required],
      typeOfSchoolD: ["", Validators.required],
      affiliateBoardD: ["", Validators.required],
      affiliateBoardD2: ["", Validators.required],
      respondentTypeD: ["", Validators.required],
    });
  }

  submitData() {
    console.log("====>", this.submitForm);
    if (this.submitForm.invalid) {
      this._aleartService.swalPopError("Please Fill Required Fields");
      this.submitForm.markAllAsTouched();
      return;
    } else {
      const payload = {
        udiseCode: "1234567890",
        schoolName: this.submitForm.value.schoolName,
        districtName: this.submitForm.value.districtName,
        udiseBlockName: this.submitForm.value.udiseBlockName,
        schoolLocationType: this.submitForm.value.schoolLocationType,
        revenueBlock: this.submitForm.value.revenueBlock,
        villName: this.submitForm.value.villName,
        gramPanchName: this.submitForm.value.gramPanchName,
        urbanLB: this.submitForm.value.urbanLB,
        wardName: this.submitForm.value.wardName,
        schoolAddress: this.submitForm.value.schoolAddress,
        pinCode: +this.submitForm.value.pinCode,
        crcName: this.submitForm.value.crcName,
        asmblyConstName: this.submitForm.value.asmblyConstName,
        parlmntConstName: this.submitForm.value.parlmntConstName,
        // latitude: +this.submitForm.value.latitude,
        latitude: 0.1,
        // longitude: +this.submitForm.value.longitude,
        longitude: 0.1,
        stdCode: +this.submitForm.value.stdCode,
        landlineNo: +this.submitForm.value.landlineNo,
        mobileNo: +this.submitForm.value.mobileNo,
        email: this.submitForm.value.email,
        website: this.submitForm.value.website,
        hos: this.submitForm.value.hos,
        // hosName: this.submitForm.value.hosName,
        hosName: "2",
        hosMobNo: +this.submitForm.value.hosMobNo,
        hosEmail: this.submitForm.value.hosEmail,
        schoolManagementGroup: this.submitForm.value.schoolManagementGroup,
        // schoolManagementCode: +this.submitForm.value.schoolManagementCode,
        schoolManagementCode: 1234,
        schoolCategoryCode: +this.submitForm.value.schoolCategoryCode,
        // schoolType: +this.submitForm.value.schoolType,
        schoolType: 2345,
        affiliationBoardSS: 11,
        affiliationBoardHS: 11,
        respondentType: 12,
        respondentName: this.submitForm.value.respondentName,
        respondentMobNo: +this.submitForm.value.respondentMobNo,
        respondentEmail: this.submitForm.value.respondentEmail,
        sessionStartDate: this.submitForm.value.sessionStartDate,
        sessionEndDate: this.submitForm.value.sessionEndDate,
        yoe: this.submitForm.value.yoe,
        // yor: this.submitForm.value.yor,
        yor: 1073741824,
        yorPrimary: this.submitForm.value.yorPrimary,
        yorUpperPrimary: this.submitForm.value.yorUpperPrimary,
        yorSecondary: this.submitForm.value.yorSecondary,
        yorHSecondary: this.submitForm.value.yorHSecondary,
        youPrToUpr: 12,
        youUprToScr: 12,
        youScrToHscr: 12,
        isCWSN: this.submitForm.value.isCWSN,
      };
      // const payload = {
      //   udiseCode: "1234567890",
      //   schoolName: "ssss",
      //   districtName: "ssss",
      //   udiseBlockName: "ssss",
      //   schoolLocationType: "ssss",
      //   revenueBlock: "sss",
      //   villName: "sss",
      //   gramPanchName: "sdfsssfs",
      //   urbanLB: "sdffsdf",
      //   wardName: "sfdsdf",
      //   schoolAddress: "sdfs",
      //   pinCode: 43242,
      //   crcName: "dssdsf",
      //   asmblyConstName: "sfdfsf",
      //   parlmntConstName: "sdfsfd",
      //   latitude: 0.12,
      //   longitude: 0.13,
      //   stdCode: 33,
      //   landlineNo: 33,
      //   mobileNo: 33,
      //   email: "fdgdgd@mail.com",
      //   website: "www.np.com",
      //   hos: "dssf",
      //   hosName: "2",
      //   hosMobNo: 33,
      //   hosEmail: "sdsdf@mail.com",
      //   schoolManagementGroup: "fdfd",
      //   schoolManagementCode: 33,
      //   schoolCategoryCode: 33,
      //   schoolType: 33,
      //   affiliationBoardSS: 33,
      //   affiliationBoardHS: 33,
      //   respondentType: 33,
      //   respondentName: "rrrrrrrrrr",
      //   respondentMobNo: 33,
      //   respondentEmail: "abc@mail.com",
      //   sessionStartDate: "2024-07-14T18:30:00.000Z",
      //   sessionEndDate: "2024-07-12T18:30:00.000Z",
      //   yoe: "2024-07-25T18:30:00.000Z",
      //   yor: 33,
      //   yorPrimary: 33,
      //   yorUpperPrimary: 333,
      //   yorSecondary: 33,
      //   yorHSecondary: 33,
      //   youPrToUpr: 33,
      //   youUprToScr: 33,
      //   youScrToHscr: 33,
      //   isCWSN: false,
      // };
      console.log(payload);

      this._commonService.saveSchoolProfile1(payload).subscribe({
        next: (res) => {
          console.log("shubham==>", res);
          this._aleartService.swalPopSuccess("Data Saved Successfully");
        },
        error: (err) => {
          this._aleartService.swalPopError("Failed");
          console.log(err);
        },
      });
    }
  }
  // "geographical_location": "",
  // "nodal_ministry_dept": "",
  // "upgradation_primary": "",
  // "upgradation_upper_primary": "",
  // "upgradation_secondary": "",
  // "hosInchargeTypeD": "",
  // "managementGroupOfSchoolD": "",
  // "typeOfSchoolD": "",
  // "affiliateBoardD": "",
  // "affiliateBoardD2": "",
  // "respondentTypeD": ""
}

// missing select
// hosInchargeTypeD
// managementGroupOfSchoolD
// typeOfSchoolD
// affiliateBoardD
// affiliateBoardD2
// respondentTypeD

// affiliationBoardHS
// affiliationBoardSS
// hosName
// latitude
// longitude
// respondentType
// schoolManagementCode
// schoolType
// youPrToUpr
// youScrToHscr
// youUprToScr
