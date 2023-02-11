import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAntiResElRisqueElComponent } from './dialog-aap-endo-type-anti-res-el-risque-el.component';

describe('DialogAapEndoTypeAntiResElRisqueElComponent', () => {
  let component: DialogAapEndoTypeAntiResElRisqueElComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAntiResElRisqueElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAntiResElRisqueElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAntiResElRisqueElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
