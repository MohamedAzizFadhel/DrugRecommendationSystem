import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoElOuiComponent } from './dialog-avk-programme-risque-endo-el-oui.component';

describe('DialogAvkProgrammeRisqueEndoElOuiComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoElOuiComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoElOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoElOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoElOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
