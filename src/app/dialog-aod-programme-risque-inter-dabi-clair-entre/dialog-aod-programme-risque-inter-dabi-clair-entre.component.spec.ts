import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterDabiClairEntreComponent } from './dialog-aod-programme-risque-inter-dabi-clair-entre.component';

describe('DialogAodProgrammeRisqueInterDabiClairEntreComponent', () => {
  let component: DialogAodProgrammeRisqueInterDabiClairEntreComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterDabiClairEntreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterDabiClairEntreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterDabiClairEntreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
