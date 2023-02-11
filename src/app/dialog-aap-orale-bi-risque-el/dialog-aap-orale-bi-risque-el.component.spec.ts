import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleBiRisqueElComponent } from './dialog-aap-orale-bi-risque-el.component';

describe('DialogAapOraleBiRisqueElComponent', () => {
  let component: DialogAapOraleBiRisqueElComponent;
  let fixture: ComponentFixture<DialogAapOraleBiRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleBiRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleBiRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
