import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueInterRisqueInterComponent } from './dialog-aap-programme-risque-inter-risque-inter.component';

describe('DialogAapProgrammeRisqueInterRisqueInterComponent', () => {
  let component: DialogAapProgrammeRisqueInterRisqueInterComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueInterRisqueInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueInterRisqueInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueInterRisqueInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
