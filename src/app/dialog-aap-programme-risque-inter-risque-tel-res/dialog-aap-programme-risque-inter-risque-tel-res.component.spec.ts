import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueInterRisqueTelResComponent } from './dialog-aap-programme-risque-inter-risque-tel-res.component';

describe('DialogAapProgrammeRisqueInterRisqueTelResComponent', () => {
  let component: DialogAapProgrammeRisqueInterRisqueTelResComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueInterRisqueTelResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueInterRisqueTelResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueInterRisqueTelResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
