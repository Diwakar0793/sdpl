import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartneringComponent } from './partnering.component';

describe('PartneringComponent', () => {
  let component: PartneringComponent;
  let fixture: ComponentFixture<PartneringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartneringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartneringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
