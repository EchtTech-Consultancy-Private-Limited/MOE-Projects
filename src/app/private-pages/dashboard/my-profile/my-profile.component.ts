import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ProfileHeaderComponent } from '../../../common/profile-header/profile-header.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: "app-my-profile",
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatSelectModule,ReactiveFormsModule, ProfileHeaderComponent, RouterLink, MatRadioModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent implements OnInit {
  submitForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.submitForm = this.getFormControls();
  }
  ngOnInit(): void {}
  getFormControls() {
    return this._fb.group({
      school_name: [""],
      district_name: [""],
      udise_block: [""],
      school_location_type: [""],
      revenue_block_cd_block: [""],
      village_name_as_Per_lgd: [""],
      name_of_gram_panchayat_as_per_lgd: [""],
      urban_local_bodies_as_per_bodies: [""],
      revenue_block_cd_Block_as_per_lgd: [""],
      school_address: [""],
      pin_code: [""],
      cluster_resource_center: [""],
      assembly_constituency: [""],
      parliamentary_constituency: [""],
      geographical_location: [""],
      std_code: [""],
      landline_number: [""],
      mobile_number: [""],
      email: [""],
      website_of_the_school: [""],
      management_code_of_school: [""],
      nodal_ministry_dept: [""],
      school_category: [""],
      respondent_name: [""],
      respondent_email: [""],
      academic_session_start: [""],
      academic_session_end_date: [""],
      year_of_establishment_of_school: [""],
      primary: [""],
      upper_primary: [""],
      secondary: [""],
      higher_secondary: [""],
      upgradation_primary: [""],
      upgradation_upper_primary: [""],
      upgradation_secondary: [""],
    });
  }

  submitData() {
    console.log(this.submitForm.value);
  }
}
