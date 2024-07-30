import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-schoolwise',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSelectModule, MatSort, MatSortModule, CommonModule ],
  templateUrl: './dashboard-schoolwise.component.html',
  styleUrls: ['./dashboard-schoolwise.component.scss']
})
export class DashboardSchoolwiseComponent {
  displayedColumns: string[] = ["position","school_Name", "UDISE_Code", "school_Category", "school_Management", "status", "last_Modified", "data_entry"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changePageSize(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const pageSize = parseInt(selectElement.value, 10);
    this.paginator.pageSize = pageSize;
    this.dataSource.paginator = this.paginator; // Update the paginator
  }
}


export interface PeriodicElement {
  // School Name	UDISE Code	School Category	School Management	Status	Last Modified	Data Entry (Active/In-Active)
  position: number;
  school_Name: string;
  UDISE_Code: number;
  school_Category: string;
  school_Management: string;
  status: string;
  last_Modified: string;
  data_entry:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,  school_Name: 'Akshay Gupta School',    UDISE_Code: 16030600306, 
    school_Category: '3 - Pr. with Up.Pr. sec. and H.Sec.', 
    school_Management: 'Completed', 
    status: 'Last Updated By : 16030600306(SCHOOL USER)| Last Updated On : 26/07/2024', 
    last_Modified: '26/07/2024', 
    data_entry: 'Data Entry Active'
  },
  {
    position: 2, 
    school_Name: 'ASHRAM PARA JB SCHOOL', 
    UDISE_Code: 16030600505, 
    school_Category: '1 - Primary', 
    school_Management: 'Needs Updation', 
    status: 'Last Updated By : (BLOCK ENTRY USER)| Last Updated On : 25/07/2024', 
    last_Modified: '25/07/2024', 
    data_entry: 'Data Entry Active'
  },
  {
    position: 3, 
    school_Name: 'BAGHAICHARI S.B. SCHOOL', 
    UDISE_Code: 16030602002, 
    school_Category: '2 - Primary with Upper Primary', 
    school_Management: 'Needs Updation', 
    status: 'Last Updated By : TR71379287 (BLOCK ENTRY USER), DURGACHOWMUHANI| Last Updated On : 30/12/2023', 
    last_Modified: '30/12/2023', 
    data_entry: 'Data Entry Active'
  },
  {
    position: 4, 
    school_Name: 'Bal Bhavan International School, Dwarka Sub City', 
    UDISE_Code: 16030600709, 
    school_Category: '3 - Pr. with Up.Pr. sec. and H.Sec.', 
    school_Management: 'Needs Updation', 
    status: 'Last Updated By : TR71374607 (BLOCK ENTRY USER), DURGACHOWMUHANI| Last Updated On : 23/07/2024', 
    last_Modified: '23/07/2024', 
    data_entry: 'Data Entry Active'
  }
];

