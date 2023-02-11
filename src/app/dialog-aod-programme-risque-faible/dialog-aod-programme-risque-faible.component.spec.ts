import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueFaibleComponent } from './dialog-aod-programme-risque-faible.component';

describe('DialogAodProgrammeRisqueFaibleComponent', () => {
  let component: DialogAodProgrammeRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
