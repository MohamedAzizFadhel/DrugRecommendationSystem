import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
