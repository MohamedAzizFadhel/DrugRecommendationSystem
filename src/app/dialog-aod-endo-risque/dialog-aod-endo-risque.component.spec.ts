import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoRisqueComponent } from './dialog-aod-endo-risque.component';

describe('DialogAodEndoRisqueComponent', () => {
  let component: DialogAodEndoRisqueComponent;
  let fixture: ComponentFixture<DialogAodEndoRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
