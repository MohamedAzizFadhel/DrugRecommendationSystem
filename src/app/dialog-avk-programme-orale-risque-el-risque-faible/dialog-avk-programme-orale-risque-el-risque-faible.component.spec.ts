import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent } from './dialog-avk-programme-orale-risque-el-risque-faible.component';

describe('DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueElRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
