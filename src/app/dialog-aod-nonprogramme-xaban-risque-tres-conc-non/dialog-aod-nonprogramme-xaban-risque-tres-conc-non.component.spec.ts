import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueTresConcNonComponent } from './dialog-aod-nonprogramme-xaban-risque-tres-conc-non.component';

describe('DialogAodNonprogrammeXabanRisqueTresConcNonComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueTresConcNonComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueTresConcNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueTresConcNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueTresConcNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
