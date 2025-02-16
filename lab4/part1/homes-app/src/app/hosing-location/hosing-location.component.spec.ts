import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosingLocationComponent } from './hosing-location.component';

describe('HosingLocationComponent', () => {
  let component: HosingLocationComponent;
  let fixture: ComponentFixture<HosingLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HosingLocationComponent]
    });
    fixture = TestBed.createComponent(HosingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
