import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueEleveTypeXabanComponent } from './dialog-aod-endo-risque-eleve-type-xaban.component';

describe('DialogAodEndoRisqueEleveTypeXabanComponent', () => {
  let component: DialogAodEndoRisqueEleveTypeXabanComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueEleveTypeXabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueEleveTypeXabanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueEleveTypeXabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
