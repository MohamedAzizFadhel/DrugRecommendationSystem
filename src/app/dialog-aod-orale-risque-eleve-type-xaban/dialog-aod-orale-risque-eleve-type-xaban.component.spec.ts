import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueEleveTypeXabanComponent } from './dialog-aod-orale-risque-eleve-type-xaban.component';

describe('DialogAodOraleRisqueEleveTypeXabanComponent', () => {
  let component: DialogAodOraleRisqueEleveTypeXabanComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueEleveTypeXabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueEleveTypeXabanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueEleveTypeXabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
