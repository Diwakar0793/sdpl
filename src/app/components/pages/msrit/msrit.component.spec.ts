import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsritComponent } from './msrit.component';

describe('MsritComponent', () => {
  let component: MsritComponent;
  let fixture: ComponentFixture<MsritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
