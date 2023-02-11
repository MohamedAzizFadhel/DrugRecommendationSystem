import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueEleveInfComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-inf.component';

describe('DialogAodNonprogrammeDabiRisqueEleveInfComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueEleveInfComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueEleveInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueEleveInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueEleveInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
