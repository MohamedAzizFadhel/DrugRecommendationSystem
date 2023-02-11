import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-oui.component';

describe('DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueEleveSupPossOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
