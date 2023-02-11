import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-oui.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
