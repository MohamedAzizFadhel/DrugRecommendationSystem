import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterDabiClairOuiComponent } from './dialog-aod-programme-risque-inter-dabi-clair-oui.component';

describe('DialogAodProgrammeRisqueInterDabiClairOuiComponent', () => {
  let component: DialogAodProgrammeRisqueInterDabiClairOuiComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterDabiClairOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterDabiClairOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterDabiClairOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
