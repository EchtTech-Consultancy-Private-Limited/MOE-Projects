import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfile2Component } from './my-profile2.component';

describe('MyProfile2Component', () => {
  let component: MyProfile2Component;
  let fixture: ComponentFixture<MyProfile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfile2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProfile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
