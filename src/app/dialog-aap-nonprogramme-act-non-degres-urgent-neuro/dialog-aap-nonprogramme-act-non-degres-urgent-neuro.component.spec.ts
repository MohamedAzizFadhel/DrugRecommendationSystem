import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresUrgentNeuroComponent } from './dialog-aap-nonprogramme-act-non-degres-urgent-neuro.component';

describe('DialogAapNonprogrammeActNonDegresUrgentNeuroComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresUrgentNeuroComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresUrgentNeuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresUrgentNeuroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresUrgentNeuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
