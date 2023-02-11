import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueEleveTypeComponent } from './dialog-aod-orale-risque-eleve-type.component';

describe('DialogAodOraleRisqueEleveTypeComponent', () => {
  let component: DialogAodOraleRisqueEleveTypeComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueEleveTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueEleveTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueEleveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
