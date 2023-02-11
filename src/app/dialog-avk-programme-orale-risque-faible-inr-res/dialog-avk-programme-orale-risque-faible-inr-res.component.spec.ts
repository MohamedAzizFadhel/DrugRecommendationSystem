import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleRisqueFaibleInrResComponent } from './dialog-avk-programme-orale-risque-faible-inr-res.component';

describe('DialogAvkProgrammeOraleRisqueFaibleInrResComponent', () => {
  let component: DialogAvkProgrammeOraleRisqueFaibleInrResComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleRisqueFaibleInrResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleRisqueFaibleInrResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleRisqueFaibleInrResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
