import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueEleveComponent } from './dialog-aod-nonprogramme-dabi-risque-eleve.component';

describe('DialogAodNonprogrammeDabiRisqueEleveComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueEleveComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
