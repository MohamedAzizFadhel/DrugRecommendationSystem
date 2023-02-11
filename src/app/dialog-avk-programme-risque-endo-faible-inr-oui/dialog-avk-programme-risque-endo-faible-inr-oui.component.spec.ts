import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent } from './dialog-avk-programme-risque-endo-faible-inr-oui.component';

describe('DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoFaibleInrOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
