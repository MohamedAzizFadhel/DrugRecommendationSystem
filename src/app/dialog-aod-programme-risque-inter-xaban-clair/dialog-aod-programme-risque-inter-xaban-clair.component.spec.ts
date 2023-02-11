import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterXabanClairComponent } from './dialog-aod-programme-risque-inter-xaban-clair.component';

describe('DialogAodProgrammeRisqueInterXabanClairComponent', () => {
  let component: DialogAodProgrammeRisqueInterXabanClairComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterXabanClairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterXabanClairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterXabanClairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
