import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrecemosInfoComponent } from './ofrecemos-info.component';

describe('OfrecemosInfoComponent', () => {
  let component: OfrecemosInfoComponent;
  let fixture: ComponentFixture<OfrecemosInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfrecemosInfoComponent]
    });
    fixture = TestBed.createComponent(OfrecemosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
