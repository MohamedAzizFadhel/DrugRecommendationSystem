import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueTresConcComponent } from './dialog-aod-nonprogramme-xaban-risque-tres-conc.component';

describe('DialogAodNonprogrammeXabanRisqueTresConcComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueTresConcComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueTresConcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueTresConcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueTresConcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
