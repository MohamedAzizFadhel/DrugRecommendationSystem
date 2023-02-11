import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre30-poss-non.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre30PossNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
