import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueComponent } from './dialog-avk-programme-orale-risque.component';

describe('DialogAvkProgrammeOraleRisqueComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
