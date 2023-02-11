import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresSemiPosComponent } from './dialog-aap-nonprogramme-act-non-degres-semi-pos.component';

describe('DialogAapNonprogrammeActNonDegresSemiPosComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresSemiPosComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresSemiPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresSemiPosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresSemiPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
