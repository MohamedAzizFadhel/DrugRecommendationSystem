import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcSupComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc-sup.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcSupComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcSupComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
