import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresSemiComponent } from './dialog-aap-nonprogramme-act-non-degres-semi.component';

describe('DialogAapNonprogrammeActNonDegresSemiComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresSemiComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresSemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresSemiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresSemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
