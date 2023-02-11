import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterXabanNonComponent } from './dialog-aod-programme-risque-inter-xaban-non.component';

describe('DialogAodProgrammeRisqueInterXabanNonComponent', () => {
  let component: DialogAodProgrammeRisqueInterXabanNonComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterXabanNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterXabanNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterXabanNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
