import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueTresConcOuiComponent } from './dialog-aod-nonprogramme-xaban-risque-tres-conc-oui.component';

describe('DialogAodNonprogrammeXabanRisqueTresConcOuiComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueTresConcOuiComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueTresConcOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueTresConcOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueTresConcOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
