import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssilorComponent } from './essilor.component';

describe('EssilorComponent', () => {
  let component: EssilorComponent;
  let fixture: ComponentFixture<EssilorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssilorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EssilorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
