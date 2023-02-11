import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAntiResFaibleComponent } from './dialog-aap-endo-type-anti-res-faible.component';

describe('DialogAapEndoTypeAntiResFaibleComponent', () => {
  let component: DialogAapEndoTypeAntiResFaibleComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAntiResFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAntiResFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAntiResFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
