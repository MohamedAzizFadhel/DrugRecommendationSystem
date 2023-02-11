import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueElRisqueComponent } from './dialog-aap-programme-risque-el-risque.component';

describe('DialogAapProgrammeRisqueElRisqueComponent', () => {
  let component: DialogAapProgrammeRisqueElRisqueComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueElRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueElRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueElRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
