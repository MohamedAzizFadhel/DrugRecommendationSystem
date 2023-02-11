import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueFaibleInrComponent } from './dialog-avk-programme-orale-risque-faible-inr.component';

describe('DialogAvkProgrammeOraleRisqueFaibleInrComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueFaibleInrComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueFaibleInrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueFaibleInrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueFaibleInrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
