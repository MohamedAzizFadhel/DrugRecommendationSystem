import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueEleveTypeDabiClairComponent } from './dialog-aod-endo-risque-eleve-type-dabi-clair.component';

describe('DialogAodEndoRisqueEleveTypeDabiClairComponent', () => {
  let component: DialogAodEndoRisqueEleveTypeDabiClairComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueEleveTypeDabiClairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueEleveTypeDabiClairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueEleveTypeDabiClairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
