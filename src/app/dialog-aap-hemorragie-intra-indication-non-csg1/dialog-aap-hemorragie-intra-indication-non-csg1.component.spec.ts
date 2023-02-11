import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieIntraIndicationNonCsg1Component } from './dialog-aap-hemorragie-intra-indication-non-csg1.component';

describe('DialogAapHemorragieIntraIndicationNonCsg1Component', () => {
  let component: DialogAapHemorragieIntraIndicationNonCsg1Component;
  let fixture: ComponentFixture<DialogAapHemorragieIntraIndicationNonCsg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieIntraIndicationNonCsg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieIntraIndicationNonCsg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
