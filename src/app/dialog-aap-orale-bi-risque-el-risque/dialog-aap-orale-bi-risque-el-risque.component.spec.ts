import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleBiRisqueElRisqueComponent } from './dialog-aap-orale-bi-risque-el-risque.component';

describe('DialogAapOraleBiRisqueElRisqueComponent', () => {
  let component: DialogAapOraleBiRisqueElRisqueComponent;
  let fixture: ComponentFixture<DialogAapOraleBiRisqueElRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleBiRisqueElRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleBiRisqueElRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
