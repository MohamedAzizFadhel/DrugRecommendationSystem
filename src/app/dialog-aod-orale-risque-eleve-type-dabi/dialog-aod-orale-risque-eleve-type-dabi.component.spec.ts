import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueEleveTypeDabiComponent } from './dialog-aod-orale-risque-eleve-type-dabi.component';

describe('DialogAodOraleRisqueEleveTypeDabiComponent', () => {
  let component: DialogAodOraleRisqueEleveTypeDabiComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueEleveTypeDabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueEleveTypeDabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueEleveTypeDabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
