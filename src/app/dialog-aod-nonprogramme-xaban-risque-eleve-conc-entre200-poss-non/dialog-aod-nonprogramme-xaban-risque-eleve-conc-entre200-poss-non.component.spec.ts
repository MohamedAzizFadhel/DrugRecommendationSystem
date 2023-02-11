import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-entre200-poss-non.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcEntre200PossNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
