import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchoolwiseComponent } from './dashboard-schoolwise.component';

describe('DashboardSchoolwiseComponent', () => {
  let component: DashboardSchoolwiseComponent;
  let fixture: ComponentFixture<DashboardSchoolwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSchoolwiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSchoolwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
