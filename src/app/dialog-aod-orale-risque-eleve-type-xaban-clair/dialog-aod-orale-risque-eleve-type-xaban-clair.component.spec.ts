import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueEleveTypeXabanClairComponent } from './dialog-aod-orale-risque-eleve-type-xaban-clair.component';

describe('DialogAodOraleRisqueEleveTypeXabanClairComponent', () => {
  let component: DialogAodOraleRisqueEleveTypeXabanClairComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueEleveTypeXabanClairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueEleveTypeXabanClairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueEleveTypeXabanClairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
