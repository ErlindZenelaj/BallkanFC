import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UEFAComponent } from './uefa.component';

describe('UEFAComponent', () => {
  let component: UEFAComponent;
  let fixture: ComponentFixture<UEFAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UEFAComponent]
    });
    fixture = TestBed.createComponent(UEFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
