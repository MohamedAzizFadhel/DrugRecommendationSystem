import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieIntraIndicationNonCsgComponent } from './dialog-aap-hemorragie-intra-indication-non-csg.component';

describe('DialogAapHemorragieIntraIndicationNonCsgComponent', () => {
  let component: DialogAapHemorragieIntraIndicationNonCsgComponent;
  let fixture: ComponentFixture<DialogAapHemorragieIntraIndicationNonCsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieIntraIndicationNonCsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieIntraIndicationNonCsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
