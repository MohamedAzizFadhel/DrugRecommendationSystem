import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueMajAccuNonComponent } from './dialog-aod-programme-risque-maj-accu-non.component';

describe('DialogAodProgrammeRisqueMajAccuNonComponent', () => {
  let component: DialogAodProgrammeRisqueMajAccuNonComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueMajAccuNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueMajAccuNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueMajAccuNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
