import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-oui.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
