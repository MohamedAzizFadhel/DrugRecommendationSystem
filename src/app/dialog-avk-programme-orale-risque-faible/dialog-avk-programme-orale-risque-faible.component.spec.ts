import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueFaibleComponent } from './dialog-avk-programme-orale-risque-faible.component';

describe('DialogAvkProgrammeOraleRisqueFaibleComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
