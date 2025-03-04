import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestPharmaComponent } from './west-pharma.component';

describe('WestPharmaComponent', () => {
  let component: WestPharmaComponent;
  let fixture: ComponentFixture<WestPharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WestPharmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WestPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
