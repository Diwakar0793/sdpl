import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemidioComponent } from './remidio.component';

describe('RemidioComponent', () => {
  let component: RemidioComponent;
  let fixture: ComponentFixture<RemidioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemidioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
