import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueMajAccuOuiComponent } from './dialog-aod-programme-risque-maj-accu-oui.component';

describe('DialogAodProgrammeRisqueMajAccuOuiComponent', () => {
  let component: DialogAodProgrammeRisqueMajAccuOuiComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueMajAccuOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueMajAccuOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueMajAccuOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
