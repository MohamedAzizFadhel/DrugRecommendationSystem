import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueComponent } from './dialog-aod-programme-risque.component';

describe('DialogAodProgrammeRisqueComponent', () => {
  let component: DialogAodProgrammeRisqueComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
