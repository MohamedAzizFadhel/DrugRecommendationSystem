import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueTresComponent } from './dialog-aod-nonprogramme-xaban-risque-tres.component';

describe('DialogAodNonprogrammeXabanRisqueTresComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueTresComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
