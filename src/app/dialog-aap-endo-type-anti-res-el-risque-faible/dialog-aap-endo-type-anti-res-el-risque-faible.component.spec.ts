import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAntiResElRisqueFaibleComponent } from './dialog-aap-endo-type-anti-res-el-risque-faible.component';

describe('DialogAapEndoTypeAntiResElRisqueFaibleComponent', () => {
  let component: DialogAapEndoTypeAntiResElRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAntiResElRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAntiResElRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAntiResElRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
