import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueEleveTypeDabiClairEntreComponent } from './dialog-aod-endo-risque-eleve-type-dabi-clair-entre.component';

describe('DialogAodEndoRisqueEleveTypeDabiClairEntreComponent', () => {
  let component: DialogAodEndoRisqueEleveTypeDabiClairEntreComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueEleveTypeDabiClairEntreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueEleveTypeDabiClairEntreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueEleveTypeDabiClairEntreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
