import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresSemiPosOuiComponent } from './dialog-aap-nonprogramme-act-non-degres-semi-pos-oui.component';

describe('DialogAapNonprogrammeActNonDegresSemiPosOuiComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresSemiPosOuiComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresSemiPosOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresSemiPosOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresSemiPosOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
