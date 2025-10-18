import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalFairComponent } from './physical-fair.component';

describe('PhysicalFairComponent', () => {
  let component: PhysicalFairComponent;
  let fixture: ComponentFixture<PhysicalFairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalFairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
