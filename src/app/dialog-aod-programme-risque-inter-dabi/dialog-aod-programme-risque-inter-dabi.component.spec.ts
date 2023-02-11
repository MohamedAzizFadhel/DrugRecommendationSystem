import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterDabiComponent } from './dialog-aod-programme-risque-inter-dabi.component';

describe('DialogAodProgrammeRisqueInterDabiComponent', () => {
  let component: DialogAodProgrammeRisqueInterDabiComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterDabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterDabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterDabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
