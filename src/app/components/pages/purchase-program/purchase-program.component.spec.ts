import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseProgramComponent } from './purchase-program.component';

describe('PurchaseProgramComponent', () => {
  let component: PurchaseProgramComponent;
  let fixture: ComponentFixture<PurchaseProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
