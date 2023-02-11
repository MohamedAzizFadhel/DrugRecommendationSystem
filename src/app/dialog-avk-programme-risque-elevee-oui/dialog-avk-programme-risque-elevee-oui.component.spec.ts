import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEleveeOuiComponent } from './dialog-avk-programme-risque-elevee-oui.component';

describe('DialogAvkProgrammeRisqueEleveeOuiComponent', () => {
  let component: DialogAvkProgrammeRisqueEleveeOuiComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEleveeOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEleveeOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEleveeOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
