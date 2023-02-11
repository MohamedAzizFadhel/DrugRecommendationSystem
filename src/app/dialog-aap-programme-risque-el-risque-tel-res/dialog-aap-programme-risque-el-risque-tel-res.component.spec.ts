import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueElRisqueTelResComponent } from './dialog-aap-programme-risque-el-risque-tel-res.component';

describe('DialogAapProgrammeRisqueElRisqueTelResComponent', () => {
  let component: DialogAapProgrammeRisqueElRisqueTelResComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueElRisqueTelResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueElRisqueTelResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueElRisqueTelResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
