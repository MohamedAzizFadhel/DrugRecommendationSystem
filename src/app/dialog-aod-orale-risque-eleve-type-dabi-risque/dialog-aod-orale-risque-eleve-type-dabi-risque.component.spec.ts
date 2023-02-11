import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueEleveTypeDabiRisqueComponent } from './dialog-aod-orale-risque-eleve-type-dabi-risque.component';

describe('DialogAodOraleRisqueEleveTypeDabiRisqueComponent', () => {
  let component: DialogAodOraleRisqueEleveTypeDabiRisqueComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueEleveTypeDabiRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueEleveTypeDabiRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueEleveTypeDabiRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
