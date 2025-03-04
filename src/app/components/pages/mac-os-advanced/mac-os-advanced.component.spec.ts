import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacOsAdvancedComponent } from './mac-os-advanced.component';

describe('MacOsAdvancedComponent', () => {
  let component: MacOsAdvancedComponent;
  let fixture: ComponentFixture<MacOsAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacOsAdvancedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacOsAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
