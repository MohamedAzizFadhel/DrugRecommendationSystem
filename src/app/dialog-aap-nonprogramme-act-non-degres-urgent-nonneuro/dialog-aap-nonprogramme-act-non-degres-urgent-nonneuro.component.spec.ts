import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent } from './dialog-aap-nonprogramme-act-non-degres-urgent-nonneuro.component';

describe('DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresUrgentNonneuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
