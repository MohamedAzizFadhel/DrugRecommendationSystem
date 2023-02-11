import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoFaibleInrComponent } from './dialog-avk-programme-risque-endo-faible-inr.component';

describe('DialogAvkProgrammeRisqueEndoFaibleInrComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoFaibleInrComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoFaibleInrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoFaibleInrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoFaibleInrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
