import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleBiRisqueElRisqueFaibleComponent } from './dialog-aap-orale-bi-risque-el-risque-faible.component';

describe('DialogAapOraleBiRisqueElRisqueFaibleComponent', () => {
  let component: DialogAapOraleBiRisqueElRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAapOraleBiRisqueElRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleBiRisqueElRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleBiRisqueElRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
