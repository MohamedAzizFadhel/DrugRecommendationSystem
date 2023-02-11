import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueElRisqueTelComponent } from './dialog-aap-programme-risque-el-risque-tel.component';

describe('DialogAapProgrammeRisqueElRisqueTelComponent', () => {
  let component: DialogAapProgrammeRisqueElRisqueTelComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueElRisqueTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueElRisqueTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueElRisqueTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
