import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueFaibleRes1Component } from './dialog-avk-programme-risque-faible-res1.component';

describe('DialogAvkProgrammeRisqueFaibleRes1Component', () => {
  let component: DialogAvkProgrammeRisqueFaibleRes1Component;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueFaibleRes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueFaibleRes1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueFaibleRes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
