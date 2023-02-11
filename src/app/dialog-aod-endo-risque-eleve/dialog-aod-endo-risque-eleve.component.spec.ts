import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueEleveComponent } from './dialog-aod-endo-risque-eleve.component';

describe('DialogAodEndoRisqueEleveComponent', () => {
  let component: DialogAodEndoRisqueEleveComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
