import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEleveeOuiResComponent } from './dialog-avk-programme-risque-elevee-oui-res.component';

describe('DialogAvkProgrammeRisqueEleveeOuiResComponent', () => {
  let component: DialogAvkProgrammeRisqueEleveeOuiResComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEleveeOuiResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEleveeOuiResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEleveeOuiResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
