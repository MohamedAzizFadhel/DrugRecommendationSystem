import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeRisqueInterComponent } from './dialog-aod-programme-risque-inter.component';

describe('DialogAodProgrammeRisqueInterComponent', () => {
  let component: DialogAodProgrammeRisqueInterComponent;
  let fixture: ComponentFixture<DialogAodProgrammeRisqueInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeRisqueInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeRisqueInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
