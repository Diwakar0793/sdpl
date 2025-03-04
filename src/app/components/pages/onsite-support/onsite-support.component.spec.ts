import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsiteSupportComponent } from './onsite-support.component';

describe('OnsiteSupportComponent', () => {
  let component: OnsiteSupportComponent;
  let fixture: ComponentFixture<OnsiteSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnsiteSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnsiteSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
