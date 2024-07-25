import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchoolInstructionComponent } from './dashboard-school-instruction.component';

describe('DashboardSchoolInstructionComponent', () => {
  let component: DashboardSchoolInstructionComponent;
  let fixture: ComponentFixture<DashboardSchoolInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSchoolInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSchoolInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
