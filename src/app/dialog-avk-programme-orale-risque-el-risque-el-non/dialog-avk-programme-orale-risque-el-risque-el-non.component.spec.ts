import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueElRisqueElNonComponent } from './dialog-avk-programme-orale-risque-el-risque-el-non.component';

describe('DialogAvkProgrammeOraleRisqueElRisqueElNonComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueElRisqueElNonComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueElRisqueElNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueElRisqueElNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueElRisqueElNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
