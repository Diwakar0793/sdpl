import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedEngComponent } from './dedicated-eng.component';

describe('DedicatedEngComponent', () => {
  let component: DedicatedEngComponent;
  let fixture: ComponentFixture<DedicatedEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedicatedEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DedicatedEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
