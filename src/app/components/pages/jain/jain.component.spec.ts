import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JainComponent } from './jain.component';

describe('JainComponent', () => {
  let component: JainComponent;
  let fixture: ComponentFixture<JainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
