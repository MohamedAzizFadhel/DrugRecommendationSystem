import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueElRisqueFaibleComponent } from './dialog-aap-programme-risque-el-risque-faible.component';

describe('DialogAapProgrammeRisqueElRisqueFaibleComponent', () => {
  let component: DialogAapProgrammeRisqueElRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueElRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueElRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueElRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
