import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPocComponent } from './demo-poc.component';

describe('DemoPocComponent', () => {
  let component: DemoPocComponent;
  let fixture: ComponentFixture<DemoPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
