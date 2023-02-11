import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueTresConcNonComponent } from './dialog-aod-nonprogramme-dabi-risque-tres-conc-non.component';

describe('DialogAodNonprogrammeDabiRisqueTresConcNonComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueTresConcNonComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueTresConcNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueTresConcNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueTresConcNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
