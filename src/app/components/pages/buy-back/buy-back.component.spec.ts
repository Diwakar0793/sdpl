import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBackComponent } from './buy-back.component';

describe('BuyBackComponent', () => {
  let component: BuyBackComponent;
  let fixture: ComponentFixture<BuyBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
