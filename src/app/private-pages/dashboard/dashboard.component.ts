import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProfileHeaderComponent } from '../../common/profile-header/profile-header.component';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/common.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,  MatGridListModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule, MatLabel , MatButtonModule, MatCardModule, ProfileHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit{
  profile:any
  hasRefreshed:boolean = false
  constructor(private _http:HttpClient, private common: CommonService){

  }
  ngOnInit(): void {
    this.getProfileData()
  
    
  }
  
  getProfileData(){
    this.common.getProfileData().subscribe((res)=>{
     this.profile = res
      localStorage.setItem("profile",JSON.stringify(this.profile))
      
    })
   
  }
  
}
