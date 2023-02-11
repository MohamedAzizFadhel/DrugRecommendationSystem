import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve-sup-poss-non.component';

describe('DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueEleveSupPossNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
