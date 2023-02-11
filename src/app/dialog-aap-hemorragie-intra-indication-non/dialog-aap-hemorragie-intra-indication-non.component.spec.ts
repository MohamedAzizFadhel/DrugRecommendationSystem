import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieIntraIndicationNonComponent } from './dialog-aap-hemorragie-intra-indication-non.component';

describe('DialogAapHemorragieIntraIndicationNonComponent', () => {
  let component: DialogAapHemorragieIntraIndicationNonComponent;
  let fixture: ComponentFixture<DialogAapHemorragieIntraIndicationNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieIntraIndicationNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieIntraIndicationNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
