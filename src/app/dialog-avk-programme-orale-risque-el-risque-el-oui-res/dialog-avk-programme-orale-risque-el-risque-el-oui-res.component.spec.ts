import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent } from './dialog-avk-programme-orale-risque-el-risque-el-oui-res.component';

describe('DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueElRisqueElOuiResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
