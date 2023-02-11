import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueTresConcComponent } from './dialog-aod-nonprogramme-dabi-risque-tres-conc.component';

describe('DialogAodNonprogrammeDabiRisqueTresConcComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueTresConcComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueTresConcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueTresConcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueTresConcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
