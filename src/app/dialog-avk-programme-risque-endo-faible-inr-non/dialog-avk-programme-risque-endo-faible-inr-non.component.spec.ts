import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoFaibleInrNonComponent } from './dialog-avk-programme-risque-endo-faible-inr-non.component';

describe('DialogAvkProgrammeRisqueEndoFaibleInrNonComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoFaibleInrNonComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoFaibleInrNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoFaibleInrNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoFaibleInrNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
