import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueFaibleRes2Component } from './dialog-avk-programme-risque-faible-res2.component';

describe('DialogAvkProgrammeRisqueFaibleRes2Component', () => {
  let component: DialogAvkProgrammeRisqueFaibleRes2Component;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueFaibleRes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueFaibleRes2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueFaibleRes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
