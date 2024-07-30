import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDashboardComponent } from './block-dashboard.component';

describe('BlockDashboardComponent', () => {
  let component: BlockDashboardComponent;
  let fixture: ComponentFixture<BlockDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
