import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
