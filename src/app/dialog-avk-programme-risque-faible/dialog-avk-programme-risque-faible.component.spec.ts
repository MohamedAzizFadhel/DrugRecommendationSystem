import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueFaibleComponent } from './dialog-avk-programme-risque-faible.component';

describe('DialogAvkProgrammeRisqueFaibleComponent', () => {
  let component: DialogAvkProgrammeRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
