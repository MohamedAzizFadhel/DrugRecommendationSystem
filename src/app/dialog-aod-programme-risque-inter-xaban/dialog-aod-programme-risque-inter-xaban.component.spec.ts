import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterXabanComponent } from './dialog-aod-programme-risque-inter-xaban.component';

describe('DialogAodProgrammeRisqueInterXabanComponent', () => {
  let component: DialogAodProgrammeRisqueInterXabanComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterXabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterXabanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterXabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
