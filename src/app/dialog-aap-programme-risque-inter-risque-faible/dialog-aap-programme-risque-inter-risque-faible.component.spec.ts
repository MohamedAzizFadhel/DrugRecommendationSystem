import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueInterRisqueFaibleComponent } from './dialog-aap-programme-risque-inter-risque-faible.component';

describe('DialogAapProgrammeRisqueInterRisqueFaibleComponent', () => {
  let component: DialogAapProgrammeRisqueInterRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueInterRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueInterRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueInterRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
