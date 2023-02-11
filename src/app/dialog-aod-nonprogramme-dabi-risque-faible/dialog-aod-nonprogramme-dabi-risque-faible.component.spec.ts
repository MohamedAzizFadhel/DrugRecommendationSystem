import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueFaibleComponent } from './dialog-aod-nonprogramme-dabi-risque-faible.component';

describe('DialogAodNonprogrammeDabiRisqueFaibleComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
