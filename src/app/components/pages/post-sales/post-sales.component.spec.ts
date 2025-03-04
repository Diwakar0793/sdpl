import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSalesComponent } from './post-sales.component';

describe('PostSalesComponent', () => {
  let component: PostSalesComponent;
  let fixture: ComponentFixture<PostSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
