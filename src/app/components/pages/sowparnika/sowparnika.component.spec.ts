import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SowparnikaComponent } from './sowparnika.component';

describe('SowparnikaComponent', () => {
  let component: SowparnikaComponent;
  let fixture: ComponentFixture<SowparnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SowparnikaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SowparnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
