import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueElComponent } from './dialog-aap-programme-risque-el.component';

describe('DialogAapProgrammeRisqueElComponent', () => {
  let component: DialogAapProgrammeRisqueElComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
