import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleBusinessComponent } from './apple-business.component';

describe('AppleBusinessComponent', () => {
  let component: AppleBusinessComponent;
  let fixture: ComponentFixture<AppleBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
