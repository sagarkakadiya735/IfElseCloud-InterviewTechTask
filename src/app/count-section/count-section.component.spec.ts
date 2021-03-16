import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSectionComponent } from './count-section.component';

describe('CountSectionComponent', () => {
  let component: CountSectionComponent;
  let fixture: ComponentFixture<CountSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
