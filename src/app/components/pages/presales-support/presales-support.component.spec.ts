import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresalesSupportComponent } from './presales-support.component';

describe('PresalesSupportComponent', () => {
  let component: PresalesSupportComponent;
  let fixture: ComponentFixture<PresalesSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresalesSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresalesSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
