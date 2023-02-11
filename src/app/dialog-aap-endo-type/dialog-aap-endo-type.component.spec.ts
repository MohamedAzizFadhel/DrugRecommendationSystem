import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeComponent } from './dialog-aap-endo-type.component';

describe('DialogAapEndoTypeComponent', () => {
  let component: DialogAapEndoTypeComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
