import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueElComponent } from './dialog-avk-programme-orale-risque-el.component';

describe('DialogAvkProgrammeOraleRisqueElComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueElComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
