import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueEleveSupPossComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss.component';

describe('DialogAodNonprogrammeDabiRisqueEleveSupPossComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueEleveSupPossComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueEleveSupPossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueEleveSupPossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueEleveSupPossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
