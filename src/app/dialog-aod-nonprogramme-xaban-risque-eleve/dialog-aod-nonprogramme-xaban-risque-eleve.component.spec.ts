import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueEleveComponent } from './dialog-aod-nonprogramme-xaban-risque-eleve.component';

describe('DialogAodNonprogrammeXabanRisqueEleveComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueEleveComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
