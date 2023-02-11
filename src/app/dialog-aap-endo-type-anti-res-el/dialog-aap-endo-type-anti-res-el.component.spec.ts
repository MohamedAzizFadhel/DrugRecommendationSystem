import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAntiResElComponent } from './dialog-aap-endo-type-anti-res-el.component';

describe('DialogAapEndoTypeAntiResElComponent', () => {
  let component: DialogAapEndoTypeAntiResElComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAntiResElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAntiResElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAntiResElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
