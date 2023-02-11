import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEleveeNonComponent } from './dialog-avk-programme-risque-elevee-non.component';

describe('DialogAvkProgrammeRisqueEleveeNonComponent', () => {
  let component: DialogAvkProgrammeRisqueEleveeNonComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEleveeNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEleveeNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEleveeNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
