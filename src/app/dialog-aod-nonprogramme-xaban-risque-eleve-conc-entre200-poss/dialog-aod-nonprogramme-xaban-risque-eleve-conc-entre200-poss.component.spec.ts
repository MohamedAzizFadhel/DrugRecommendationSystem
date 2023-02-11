import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
