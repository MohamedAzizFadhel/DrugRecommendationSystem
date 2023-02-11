import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieIntraIndicationOuiComponent } from './dialog-aap-hemorragie-intra-indication-oui.component';

describe('DialogAapHemorragieIntraIndicationOuiComponent', () => {
  let component: DialogAapHemorragieIntraIndicationOuiComponent;
  let fixture: ComponentFixture<DialogAapHemorragieIntraIndicationOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieIntraIndicationOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieIntraIndicationOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
