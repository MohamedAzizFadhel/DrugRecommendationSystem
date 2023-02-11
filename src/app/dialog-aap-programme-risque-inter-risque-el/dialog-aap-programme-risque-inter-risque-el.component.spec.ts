import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueInterRisqueElComponent } from './dialog-aap-programme-risque-inter-risque-el.component';

describe('DialogAapProgrammeRisqueInterRisqueElComponent', () => {
  let component: DialogAapProgrammeRisqueInterRisqueElComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueInterRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueInterRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueInterRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
