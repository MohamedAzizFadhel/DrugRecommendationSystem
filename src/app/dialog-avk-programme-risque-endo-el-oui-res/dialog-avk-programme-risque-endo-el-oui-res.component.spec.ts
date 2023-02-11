import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoElOuiResComponent } from './dialog-avk-programme-risque-endo-el-oui-res.component';

describe('DialogAvkProgrammeRisqueEndoElOuiResComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoElOuiResComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoElOuiResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoElOuiResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoElOuiResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
