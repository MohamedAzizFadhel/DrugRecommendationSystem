import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAntiResElRisqueComponent } from './dialog-aap-endo-type-anti-res-el-risque.component';

describe('DialogAapEndoTypeAntiResElRisqueComponent', () => {
  let component: DialogAapEndoTypeAntiResElRisqueComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAntiResElRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAntiResElRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAntiResElRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
