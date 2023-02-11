import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueTresConcOuiComponent } from './dialog-aod-nonprogramme-dabi-risque-tres-conc-oui.component';

describe('DialogAodNonprogrammeDabiRisqueTresConcOuiComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueTresConcOuiComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueTresConcOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueTresConcOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueTresConcOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
