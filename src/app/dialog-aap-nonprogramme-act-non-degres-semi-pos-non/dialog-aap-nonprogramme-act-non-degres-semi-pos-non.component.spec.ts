import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresSemiPosNonComponent } from './dialog-aap-nonprogramme-act-non-degres-semi-pos-non.component';

describe('DialogAapNonprogrammeActNonDegresSemiPosNonComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresSemiPosNonComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresSemiPosNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresSemiPosNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresSemiPosNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
