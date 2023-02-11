import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkNonprogrammeEleveeResUrgentComponent } from './dialog-avk-nonprogramme-elevee-res-urgent.component';

describe('DialogAvkNonprogrammeEleveeResUrgentComponent', () => {
  let component: DialogAvkNonprogrammeEleveeResUrgentComponent;
  let fixture: ComponentFixture<DialogAvkNonprogrammeEleveeResUrgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkNonprogrammeEleveeResUrgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkNonprogrammeEleveeResUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
