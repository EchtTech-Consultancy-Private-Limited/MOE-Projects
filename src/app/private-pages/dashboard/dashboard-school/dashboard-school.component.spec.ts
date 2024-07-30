import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchoolComponent } from './dashboard-school.component';

describe('DashboardSchoolComponent', () => {
  let component: DashboardSchoolComponent;
  let fixture: ComponentFixture<DashboardSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
