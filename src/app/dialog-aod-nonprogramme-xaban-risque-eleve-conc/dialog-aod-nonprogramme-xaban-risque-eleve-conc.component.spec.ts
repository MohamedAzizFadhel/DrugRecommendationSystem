import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveConcComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve-conc.component';

describe('DialogAodNonprogrammeXabanRisqueEleveConcComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveConcComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveConcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveConcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveConcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
