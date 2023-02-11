import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueComponent } from './dialog-avk-programme-risque.component';

describe('DialogAvkProgrammeRisqueComponent', () => {
  let component: DialogAvkProgrammeRisqueComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
