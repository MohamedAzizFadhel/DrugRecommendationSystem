import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterDabiClairComponent } from './dialog-aod-programme-risque-inter-dabi-clair.component';

describe('DialogAodProgrammeRisqueInterDabiClairComponent', () => {
  let component: DialogAodProgrammeRisqueInterDabiClairComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterDabiClairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterDabiClairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterDabiClairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
