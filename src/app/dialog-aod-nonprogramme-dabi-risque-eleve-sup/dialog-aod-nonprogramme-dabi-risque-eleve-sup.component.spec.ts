import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueEleveSupComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup.component';

describe('DialogAodNonprogrammeDabiRisqueEleveSupComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueEleveSupComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueEleveSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueEleveSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueEleveSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
