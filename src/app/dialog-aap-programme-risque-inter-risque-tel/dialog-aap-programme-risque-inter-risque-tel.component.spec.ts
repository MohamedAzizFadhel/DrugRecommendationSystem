import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueInterRisqueTelComponent } from './dialog-aap-programme-risque-inter-risque-tel.component';

describe('DialogAapProgrammeRisqueInterRisqueTelComponent', () => {
  let component: DialogAapProgrammeRisqueInterRisqueTelComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueInterRisqueTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueInterRisqueTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueInterRisqueTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
