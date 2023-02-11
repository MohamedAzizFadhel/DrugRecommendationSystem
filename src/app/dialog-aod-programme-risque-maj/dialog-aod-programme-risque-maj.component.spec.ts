import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueMajComponent } from './dialog-aod-programme-risque-maj.component';

describe('DialogAodProgrammeRisqueMajComponent', () => {
  let component: DialogAodProgrammeRisqueMajComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueMajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueMajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueMajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
