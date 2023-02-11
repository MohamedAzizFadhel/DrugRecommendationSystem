import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueInterRisqueComponent } from './dialog-aap-programme-risque-inter-risque.component';

describe('DialogAapProgrammeRisqueInterRisqueComponent', () => {
  let component: DialogAapProgrammeRisqueInterRisqueComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueInterRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueInterRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueInterRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
