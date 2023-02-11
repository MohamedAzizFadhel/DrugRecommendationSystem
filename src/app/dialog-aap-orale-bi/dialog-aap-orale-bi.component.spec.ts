import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleBiComponent } from './dialog-aap-orale-bi.component';

describe('DialogAapOraleBiComponent', () => {
  let component: DialogAapOraleBiComponent;
  let fixture: ComponentFixture<DialogAapOraleBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
