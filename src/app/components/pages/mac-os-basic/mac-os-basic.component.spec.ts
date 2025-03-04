import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacOsBasicComponent } from './mac-os-basic.component';

describe('MacOsBasicComponent', () => {
  let component: MacOsBasicComponent;
  let fixture: ComponentFixture<MacOsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacOsBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacOsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
