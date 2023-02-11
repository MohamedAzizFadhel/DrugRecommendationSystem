import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueEleveTypeDabiComponent } from './dialog-aod-endo-risque-eleve-type-dabi.component';

describe('DialogAodEndoRisqueEleveTypeDabiComponent', () => {
  let component: DialogAodEndoRisqueEleveTypeDabiComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueEleveTypeDabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueEleveTypeDabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueEleveTypeDabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
