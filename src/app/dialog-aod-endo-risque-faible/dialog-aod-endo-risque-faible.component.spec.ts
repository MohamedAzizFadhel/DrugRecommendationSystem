import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueFaibleComponent } from './dialog-aod-endo-risque-faible.component';

describe('DialogAodEndoRisqueFaibleComponent', () => {
  let component: DialogAodEndoRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
