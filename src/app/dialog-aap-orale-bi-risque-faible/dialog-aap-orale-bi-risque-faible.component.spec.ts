import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleBiRisqueFaibleComponent } from './dialog-aap-orale-bi-risque-faible.component';

describe('DialogAapOraleBiRisqueFaibleComponent', () => {
  let component: DialogAapOraleBiRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAapOraleBiRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleBiRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleBiRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
