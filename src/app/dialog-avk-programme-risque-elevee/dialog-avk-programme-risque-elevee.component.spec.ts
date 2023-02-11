import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEleveeComponent } from './dialog-avk-programme-risque-elevee.component';

describe('DialogAvkProgrammeRisqueEleveeComponent', () => {
  let component: DialogAvkProgrammeRisqueEleveeComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEleveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEleveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEleveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
