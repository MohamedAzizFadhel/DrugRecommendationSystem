import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkHemmoragieComponent } from './dialog-avk-hemmoragie.component';

describe('DialogAvkHemmoragieComponent', () => {
  let component: DialogAvkHemmoragieComponent;
  let fixture: ComponentFixture<DialogAvkHemmoragieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkHemmoragieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkHemmoragieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
