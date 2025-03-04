import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualMaintenanceComponent } from './annual-maintenance.component';

describe('AnnualMaintenanceComponent', () => {
  let component: AnnualMaintenanceComponent;
  let fixture: ComponentFixture<AnnualMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnualMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
