import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoElComponent } from './dialog-avk-programme-risque-endo-el.component';

describe('DialogAvkProgrammeRisqueEndoElComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoElComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
