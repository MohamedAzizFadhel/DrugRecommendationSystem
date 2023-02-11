import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent } from './dialog-avk-programme-orale-risque-el-risque-el-oui.component';

describe('DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueElRisqueElOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
