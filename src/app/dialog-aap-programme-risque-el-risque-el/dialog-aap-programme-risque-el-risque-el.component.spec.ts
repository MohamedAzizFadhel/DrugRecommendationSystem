import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueElRisqueElComponent } from './dialog-aap-programme-risque-el-risque-el.component';

describe('DialogAapProgrammeRisqueElRisqueElComponent', () => {
  let component: DialogAapProgrammeRisqueElRisqueElComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueElRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueElRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueElRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
