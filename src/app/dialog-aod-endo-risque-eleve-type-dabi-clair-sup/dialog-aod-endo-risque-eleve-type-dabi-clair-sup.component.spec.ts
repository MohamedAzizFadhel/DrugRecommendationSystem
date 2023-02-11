import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueEleveTypeDabiClairSupComponent } from './dialog-aod-endo-risque-eleve-type-dabi-clair-sup.component';

describe('DialogAodEndoRisqueEleveTypeDabiClairSupComponent', () => {
  let component: DialogAodEndoRisqueEleveTypeDabiClairSupComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueEleveTypeDabiClairSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueEleveTypeDabiClairSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueEleveTypeDabiClairSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
