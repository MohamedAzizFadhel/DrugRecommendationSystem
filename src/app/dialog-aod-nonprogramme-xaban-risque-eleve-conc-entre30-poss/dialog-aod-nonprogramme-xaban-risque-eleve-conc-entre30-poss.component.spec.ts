import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
