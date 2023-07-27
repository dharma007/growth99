import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsCenterComponent } from './notifications-center.component';

describe('NotificationsCenterComponent', () => {
  let component: NotificationsCenterComponent;
  let fixture: ComponentFixture<NotificationsCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsCenterComponent]
    });
    fixture = TestBed.createComponent(NotificationsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
