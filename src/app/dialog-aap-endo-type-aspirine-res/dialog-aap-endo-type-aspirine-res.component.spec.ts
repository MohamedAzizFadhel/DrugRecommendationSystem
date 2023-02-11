import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAspirineResComponent } from './dialog-aap-endo-type-aspirine-res.component';

describe('DialogAapEndoTypeAspirineResComponent', () => {
  let component: DialogAapEndoTypeAspirineResComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAspirineResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAspirineResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAspirineResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
