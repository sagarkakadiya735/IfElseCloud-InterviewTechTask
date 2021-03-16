import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesAnalyticsComponent } from './classes-analytics.component';

describe('ClassesAnalyticsComponent', () => {
  let component: ClassesAnalyticsComponent;
  let fixture: ComponentFixture<ClassesAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
