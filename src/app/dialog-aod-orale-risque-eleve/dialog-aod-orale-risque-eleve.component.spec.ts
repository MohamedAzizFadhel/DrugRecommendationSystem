import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueEleveComponent } from './dialog-aod-orale-risque-eleve.component';

describe('DialogAodOraleRisqueEleveComponent', () => {
  let component: DialogAodOraleRisqueEleveComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
