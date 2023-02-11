import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleBiRisqueComponent } from './dialog-aap-orale-bi-risque.component';

describe('DialogAapOraleBiRisqueComponent', () => {
  let component: DialogAapOraleBiRisqueComponent;
  let fixture: ComponentFixture<DialogAapOraleBiRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleBiRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleBiRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
