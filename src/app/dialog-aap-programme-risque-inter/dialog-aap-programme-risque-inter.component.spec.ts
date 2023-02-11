import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeRisqueInterComponent } from './dialog-aap-programme-risque-inter.component';

describe('DialogAapProgrammeRisqueInterComponent', () => {
  let component: DialogAapProgrammeRisqueInterComponent;
  let fixture: ComponentFixture<DialogAapProgrammeRisqueInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeRisqueInterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeRisqueInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
