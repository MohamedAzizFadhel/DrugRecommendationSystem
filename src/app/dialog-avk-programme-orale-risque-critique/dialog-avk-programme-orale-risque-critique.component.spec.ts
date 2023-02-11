import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueCritiqueComponent } from './dialog-avk-programme-orale-risque-critique.component';

describe('DialogAvkProgrammeOraleRisqueCritiqueComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueCritiqueComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueCritiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueCritiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueCritiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
