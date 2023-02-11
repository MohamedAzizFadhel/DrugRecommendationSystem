import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcInfComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-inf.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcInfComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcInfComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
