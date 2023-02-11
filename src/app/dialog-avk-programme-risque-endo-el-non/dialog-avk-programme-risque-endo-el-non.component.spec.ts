import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoElNonComponent } from './dialog-avk-programme-risque-endo-el-non.component';

describe('DialogAvkProgrammeRisqueEndoElNonComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoElNonComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoElNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoElNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoElNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
