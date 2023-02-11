import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueElRisqueComponent } from './dialog-avk-programme-orale-risque-el-risque.component';

describe('DialogAvkProgrammeOraleRisqueElRisqueComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueElRisqueComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueElRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueElRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueElRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
