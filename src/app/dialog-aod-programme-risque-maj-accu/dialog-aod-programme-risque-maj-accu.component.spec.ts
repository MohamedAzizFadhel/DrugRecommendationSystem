import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueMajAccuComponent } from './dialog-aod-programme-risque-maj-accu.component';

describe('DialogAodProgrammeRisqueMajAccuComponent', () => {
  let component: DialogAodProgrammeRisqueMajAccuComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueMajAccuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueMajAccuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueMajAccuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
