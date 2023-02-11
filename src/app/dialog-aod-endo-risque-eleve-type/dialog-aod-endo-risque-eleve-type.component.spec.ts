import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueEleveTypeComponent } from './dialog-aod-endo-risque-eleve-type.component';

describe('DialogAodEndoRisqueEleveTypeComponent', () => {
  let component: DialogAodEndoRisqueEleveTypeComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueEleveTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueEleveTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueEleveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
