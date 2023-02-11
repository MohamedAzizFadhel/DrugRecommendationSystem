import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueTresComponent } from './dialog-aod-nonprogramme-dabi-risque-tres.component';

describe('DialogAodNonprogrammeDabiRisqueTresComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueTresComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
