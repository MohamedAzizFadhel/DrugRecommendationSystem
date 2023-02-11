import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanRisqueComponent } from './dialog-aod-nonprogramme-xaban-risque.component';

describe('DialogAodNonprogrammeXabanRisqueComponent', () => {
  let component: DialogAodNonprogrammeXabanRisqueComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
