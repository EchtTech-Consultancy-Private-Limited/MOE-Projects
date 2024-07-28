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
    RouterLink,
    MatInputModule,
    MatRadioModule,
  ],
  templateUrl: "./my-profile.component.html",
  styleUrl: "./my-profile.component.scss",
})
export class MyProfileComponent implements OnInit {
  submitForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private _aleartService: AlertServiceService,
    private _commonService: CommonService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.submitForm = this.getFormControls();
    this.dateAdapter.setLocale("en-GB");
  }
  ngOnInit(): void {}
  getFormControls() {
    return this._fb.group({
      schoolName: [""],
      districtName: [""],
      udiseBlockName: [""],
      schoolLocationType: [""],
      revenueBlock: [""],
      villName: [""],
      gramPanchName: [""],
      urbanLB: [""],
      wardName: [""],
      schoolAddress: [""],
      pinCode: [""],
      crcName: [""],
      asmblyConstName: [""],
      parlmntConstName: [""],
      latitude: [""],
      longitude: [""],
      stdCode: [""],
      landlineNo: [""],
      mobileNo: [""],
      email: [""],
      website: [""],
      hos: [""],
      hosName: [""],
      hosMobNo: [""],
      hosEmail: [""],
      schoolManagementGroup: [""],
      schoolManagementCode: [""],
      schoolCategoryCode: [""],
      schoolType: [""],
      affiliationBoardSS: [""],
      affiliationBoardHS: [""],
      respondentType: [""],
      respondentName: [""],
      respondentMobNo: [""],
      respondentEmail: [""],
      sessionStartDate: [""],
      sessionEndDate: [""],
      yoe: [""],
      yor: [""],
      yorPrimary: [""],
      yorUpperPrimary: [""],
      yorSecondary: [""],
      yorHSecondary: [""],
      youPrToUpr: [""],
      youUprToScr: [""],
      youScrToHscr: [""],
      isCWSN: [""],
      geographical_location: [""],
      nodal_ministry_dept: [""],
      upgradation_primary: [""],
      upgradation_upper_primary: [""],
      upgradation_secondary: [""],
      hosInchargeTypeD: [""],
      managementGroupOfSchoolD: [""],
      typeOfSchoolD: [""],
      affiliateBoardD: [""],
      affiliateBoardD2: [""],
      respondentTypeD: [""],
    });
  }

  submitData() {
    console.log("FormData==>", this.submitForm.value);
    const payload = {
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
      pinCode: this.submitForm.value.pinCode,
      crcName: this.submitForm.value.crcName,
      asmblyConstName: this.submitForm.value.asmblyConstName,
      parlmntConstName: this.submitForm.value.parlmntConstName,
      latitude: this.submitForm.value.latitude,
      longitude: this.submitForm.value.longitude,
      stdCode: this.submitForm.value.stdCode,
      landlineNo: this.submitForm.value.landlineNo,
      mobileNo: this.submitForm.value.mobileNo,
      email: this.submitForm.value.email,
      website: this.submitForm.value.website,
      hos: this.submitForm.value.hos,
      hosName: this.submitForm.value.hosName,
      hosMobNo: this.submitForm.value.hosMobNo,
      hosEmail: this.submitForm.value.hosEmail,
      schoolManagementGroup: this.submitForm.value.schoolManagementGroup,
      schoolManagementCode: this.submitForm.value.schoolManagementCode,
      schoolCategoryCode: this.submitForm.value.schoolCategoryCode,
      schoolType: this.submitForm.value.schoolType,
      affiliationBoardSS: this.submitForm.value.affiliationBoardSS,
      affiliationBoardHS: this.submitForm.value.affiliationBoardHS,
      respondentType: this.submitForm.value.respondentType,
      respondentName: this.submitForm.value.respondentName,
      respondentMobNo: this.submitForm.value.respondentMobNo,
      respondentEmail: this.submitForm.value.respondentEmail,
      sessionStartDate: this.submitForm.value.sessionStartDate,
      sessionEndDate: this.submitForm.value.sessionEndDate,
      yoe: this.submitForm.value.yoe,
      yor: this.submitForm.value.yor,
      yorPrimary: this.submitForm.value.yorPrimary,
      yorUpperPrimary: this.submitForm.value.yorUpperPrimary,
      yorSecondary: this.submitForm.value.yorSecondary,
      yorHSecondary: this.submitForm.value.yorHSecondary,
      youPrToUpr: this.submitForm.value.youPrToUpr,
      youUprToScr: this.submitForm.value.youUprToScr,
      youScrToHscr: this.submitForm.value.youScrToHscr,
      isCWSN: this.submitForm.value.isCWSN,
      // hosInchargeTypeD: this.submitForm.value.hosInchargeTypeD,
      // managementGroupOfSchoolD: this.submitForm.value.managementGroupOfSchoolD,
      // typeOfSchoolD: this.submitForm.value.typeOfSchoolD,
      // affiliateBoardD: this.submitForm.value.affiliateBoardD,
      // affiliateBoardD2: this.submitForm.value.affiliateBoardD2,
      // respondentTypeD: this.submitForm.value.respondentTypeD,
    };
    // console.log("PAYLOAD==>", payload);
    // this._commonService.saveSchoolProfile(payload).subscribe({
    //   next: (res) => {
    //     console.log("shubham==>", res);
    //     this._aleartService.swalPopSuccess("Data Saved Successfully");
    //   },
    //   error: (err) => {
    //     this._aleartService.swalPopError("Failed");
    //     console.log(err);
    //   },
    // });
  }
}

// missing select
// hosInchargeTypeD
// managementGroupOfSchoolD
// typeOfSchoolD
// affiliateBoardD
// affiliateBoardD2
// respondentTypeD
