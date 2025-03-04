import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerIncidentComponent } from './per-incident.component';

describe('PerIncidentComponent', () => {
  let component: PerIncidentComponent;
  let fixture: ComponentFixture<PerIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerIncidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
