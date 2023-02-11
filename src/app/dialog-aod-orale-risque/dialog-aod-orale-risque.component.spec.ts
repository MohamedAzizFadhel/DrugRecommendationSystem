import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueComponent } from './dialog-aod-orale-risque.component';

describe('DialogAodOraleRisqueComponent', () => {
  let component: DialogAodOraleRisqueComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
