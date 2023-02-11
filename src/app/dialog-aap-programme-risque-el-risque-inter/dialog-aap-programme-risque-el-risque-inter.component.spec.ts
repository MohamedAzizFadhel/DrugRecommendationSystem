import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueElRisqueInterComponent } from './dialog-aap-programme-risque-el-risque-inter.component';

describe('DialogAapProgrammeRisqueElRisqueInterComponent', () => {
  let component: DialogAapProgrammeRisqueElRisqueInterComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueElRisqueInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueElRisqueInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueElRisqueInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
