import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueFaibleComponent } from './dialog-aap-programme-risque-faible.component';

describe('DialogAapProgrammeRisqueFaibleComponent', () => {
  let component: DialogAapProgrammeRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
