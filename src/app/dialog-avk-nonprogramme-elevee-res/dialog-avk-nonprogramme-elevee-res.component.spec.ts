import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkNonprogrammeEleveeResComponent } from './dialog-avk-nonprogramme-elevee-res.component';

describe('DialogAvkNonprogrammeEleveeResComponent', () => {
  let component: DialogAvkNonprogrammeEleveeResComponent;
  let fixture: ComponentFixture<DialogAvkNonprogrammeEleveeResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkNonprogrammeEleveeResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkNonprogrammeEleveeResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
