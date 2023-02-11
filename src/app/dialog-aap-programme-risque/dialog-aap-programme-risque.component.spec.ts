import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueComponent } from './dialog-aap-programme-risque.component';

describe('DialogAapProgrammeRisqueComponent', () => {
  let component: DialogAapProgrammeRisqueComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
