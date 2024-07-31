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
  sudise: any;
  udiseCode: any;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _aleartService: AlertServiceService,
    private _commonService: CommonService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.submitForm = this.getFormControls();
    this.myProfileDataTwo();
    this.dateAdapter.setLocale("en-GB");
    const dise:any = localStorage.getItem("profile")
    this.sudise = JSON.parse(dise)
    this.udiseCode = this.sudise.udiseCode

    console.log("usdoeoee",this.udiseCode )
  }
  ngOnInit(): void { }

  myProfileDataTwo() {
    this._commonService.getProfileDataForm1().subscribe(
      (data) => {
        console.log("data naved hulk", data);
        this.formOneData = data;
        this.submitForm.get("schoolName")?.patchValue(this.formOneData.schoolName);
        this.submitForm.get("districtName")?.patchValue(this.formOneData.districtName);
        this.submitForm.get("udiseBlockName")?.patchValue(this.formOneData.udiseBlockName);
        this.submitForm.get("schoolLocationType")?.patchValue(this.formOneData.schoolLocationType);
        this.submitForm.get("revenueBlock")?.patchValue(this.formOneData.revenueBlock);
        this.submitForm.get("villName")?.patchValue(this.formOneData.villName);
        this.submitForm.get("gramPanchName")?.patchValue(this.formOneData.gramPanchName);
        this.submitForm.get("urbanLB")?.patchValue(this.formOneData.urbanLB);
        this.submitForm.get("wardName")?.patchValue(this.formOneData.wardName);
        this.submitForm.get("schoolAddress")?.patchValue(this.formOneData.schoolAddress);
        this.submitForm.get("pinCode")?.patchValue(this.formOneData.pinCode);
        this.submitForm.get("crcName")?.patchValue(this.formOneData.crcName);
        this.submitForm.get("asmblyConstName")?.patchValue(this.formOneData.asmblyConstName);
        this.submitForm.get("parlmntConstName")?.patchValue(this.formOneData.parlmntConstName);
        this.submitForm.get("latitude")?.patchValue(this.formOneData.latitude);
        this.submitForm.get("longitude")?.patchValue(this.formOneData.longitude);
        this.submitForm.get("stdCode")?.patchValue(this.formOneData.stdCode);
        this.submitForm.get("landlineNo")?.patchValue(this.formOneData.landlineNo);
        this.submitForm.get("mobileNo")?.patchValue(this.formOneData.mobileNo);
        this.submitForm.get("email")?.patchValue(this.formOneData.email);
        this.submitForm.get("website")?.patchValue(this.formOneData.website);
        this.submitForm.get("hos")?.patchValue(this.formOneData.hos);
        this.submitForm.get("hosName")?.patchValue(this.formOneData.hosName);
        this.submitForm.get("hosMobNo")?.patchValue(this.formOneData.hosMobNo);
        this.submitForm.get("hosEmail")?.patchValue(this.formOneData.hosEmail);
        this.submitForm.get("schoolManagementGroup")?.patchValue(this.formOneData.schoolManagementGroup);
        this.submitForm.get("schoolManagementCode")?.patchValue(this.formOneData.schoolManagementCode);
        this.submitForm.get("schoolCategoryCode")?.patchValue(this.formOneData.schoolCategoryCode);
        this.submitForm.get("schoolType")?.patchValue(this.formOneData.schoolType);
        this.submitForm.get("affiliationBoardSS")?.patchValue(this.formOneData.affiliationBoardSS);
        this.submitForm.get("affiliationBoardHS")?.patchValue(this.formOneData.affiliationBoardHS);
        this.submitForm.get("respondentType")?.patchValue(this.formOneData.respondentType);
        this.submitForm.get("respondentName")?.patchValue(this.formOneData.respondentName);
        this.submitForm.get("respondentMobNo")?.patchValue(this.formOneData.respondentMobNo);
        this.submitForm.get("respondentEmail")?.patchValue(this.formOneData.respondentEmail);
        this.submitForm.get("sessionStartDate")?.patchValue(this.formOneData.sessionStartDate);
        this.submitForm.get("sessionEndDate")?.patchValue(this.formOneData.sessionEndDate);
        this.submitForm.get("yoe")?.patchValue(this.formOneData.yoe);
        this.submitForm.get("yor")?.patchValue(this.formOneData.yor);
        this.submitForm.get("yorPrimary")?.patchValue(this.formOneData.yorPrimary);
        this.submitForm.get("yorUpperPrimary")?.patchValue(this.formOneData.yorUpperPrimary);
        this.submitForm.get("yorSecondary")?.patchValue(this.formOneData.yorSecondary);
        this.submitForm.get("yorHSecondary")?.patchValue(this.formOneData.yorHSecondary);
        this.submitForm.get("youPrToUpr")?.patchValue(this.formOneData.youPrToUpr);
        this.submitForm.get("youUprToScr")?.patchValue(this.formOneData.youUprToScr);
        this.submitForm.get("youScrToHscr")?.patchValue(this.formOneData.youScrToHscr);
        this.submitForm.get("isCWSN")?.patchValue(this.formOneData.isCWSN);
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
      // geographical_location: ["22w"],
      nodal_ministry_dept: ['Code 101'],
      upgradation_primary: [1989, Validators.required],
      upgradation_upper_primary: [1990, Validators.required],
      upgradation_secondary: [1995, Validators.required],
      // hosInchargeTypeD: ["", Validators.required],
      managementGroupOfSchoolD: [2],
      typeOfSchoolD: [2],
      affiliateBoardD: [3],
      affiliateBoardD2: [4],
      respondentTypeD: [2],
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
        udiseCode: this.udiseCode,
        //schoolName: this.submitForm.value.schoolName,
        //districtName: this.submitForm.value.districtName,
        //udiseBlockName: this.submitForm.value.udiseBlockName,
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
        latitude: this.submitForm.value.latitude, // change to string
        // latitude: 0.1,
        longitude: this.submitForm.value.longitude, // change to string
        // longitude: 0.1,
        stdCode: +this.submitForm.value.stdCode,
        landlineNo: +this.submitForm.value.landlineNo,
        mobileNo: +this.submitForm.value.mobileNo,
        email: this.submitForm.value.email,
        website: this.submitForm.value.website,
        hos: this.submitForm.value.hos,
        hosName: this.submitForm.value.hosName,
        // hosName: "2",
        hosMobNo: this.submitForm.value.hosMobNo,
        hosEmail: this.submitForm.value.hosEmail,
        schoolManagementGroup: this.submitForm.value.schoolManagementGroup,
        // schoolManagementCode: this.submitForm.value.schoolManagementCode,
        // schoolManagementCode: 1234,
        //schoolCategoryCode: this.submitForm.value.schoolCategoryCode,
        schoolType: this.submitForm.value.schoolType,
        // schoolType: 2345,
        affiliationBoardSS: this.submitForm.value.affiliationBoardSS,
        affiliationBoardHS: this.submitForm.value.affiliationBoardHS,
        // affiliationBoardSS: 11,
        // affiliationBoardHS: 11,
        respondentType: this.submitForm.value.respondentType,
        // respondentType: 12,
        respondentName: this.submitForm.value.respondentName,
        respondentMobNo: +this.submitForm.value.respondentMobNo,
        respondentEmail: this.submitForm.value.respondentEmail,
        sessionStartDate: this.submitForm.value.sessionStartDate,
        sessionEndDate: this.submitForm.value.sessionEndDate,
        yoe: this.submitForm.value.yoe,
        yor: this.submitForm.value.yor,
        // yor: 1073741824,
        yorPrimary: this.submitForm.value.yorPrimary,
        yorUpperPrimary: this.submitForm.value.yorUpperPrimary,
        yorSecondary: this.submitForm.value.yorSecondary,
        yorHSecondary: this.submitForm.value.yorHSecondary,
        youPrToUpr: this.submitForm.value.youPrToUpr,
        youUprToScr: this.submitForm.value.youUprToScr,
        youScrToHscr: this.submitForm.value.youScrToHscr,
        // youPrToUpr: 12,
        // youUprToScr: 12,
        // youScrToHsc2r: 12,
        isCWSN: this.submitForm.value.isCWSN,
      };
      

      this._commonService.saveSchoolProfile1(payload).subscribe({
        next: (res) => {
          console.log("shubham==>", res);
         // this._aleartService.swalPopSuccess("Data Saved Successfully");
          this._router.navigateByUrl("/my-profile2");
        },
        error: (err) => {
          this._aleartService.swalPopError(err.error.error);
          console.log("shubhm",err.error);
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
