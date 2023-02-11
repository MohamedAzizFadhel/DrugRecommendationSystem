import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent } from './dialog-avk-programme-risque-endo-faible-inr-oui-res.component';

describe('DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoFaibleInrOuiResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
