import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueFaibleComponent } from './dialog-aod-nonprogramme-xaban-risque-faible.component';

describe('DialogAodNonprogrammeXabanRisqueFaibleComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
