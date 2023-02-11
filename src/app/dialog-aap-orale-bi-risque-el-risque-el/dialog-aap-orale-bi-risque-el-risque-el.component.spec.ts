import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleBiRisqueElRisqueElComponent } from './dialog-aap-orale-bi-risque-el-risque-el.component';

describe('DialogAapOraleBiRisqueElRisqueElComponent', () => {
  let component: DialogAapOraleBiRisqueElRisqueElComponent;
  let fixture: ComponentFixture<DialogAapOraleBiRisqueElRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleBiRisqueElRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleBiRisqueElRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
