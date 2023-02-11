import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterXabanOuiComponent } from './dialog-aod-programme-risque-inter-xaban-oui.component';

describe('DialogAodProgrammeRisqueInterXabanOuiComponent', () => {
  let component: DialogAodProgrammeRisqueInterXabanOuiComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterXabanOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterXabanOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterXabanOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
