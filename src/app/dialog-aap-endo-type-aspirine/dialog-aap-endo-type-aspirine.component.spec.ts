import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAspirineComponent } from './dialog-aap-endo-type-aspirine.component';

describe('DialogAapEndoTypeAspirineComponent', () => {
  let component: DialogAapEndoTypeAspirineComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAspirineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAspirineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAspirineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
