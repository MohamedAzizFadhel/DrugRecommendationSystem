import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueElRisqueElComponent } from './dialog-avk-programme-orale-risque-el-risque-el.component';

describe('DialogAvkProgrammeOraleRisqueElRisqueElComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueElRisqueElComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueElRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueElRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueElRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
