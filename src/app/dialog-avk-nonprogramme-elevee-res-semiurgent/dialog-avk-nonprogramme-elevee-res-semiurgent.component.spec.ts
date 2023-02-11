import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkNonprogrammeEleveeResSemiurgentComponent } from './dialog-avk-nonprogramme-elevee-res-semiurgent.component';

describe('DialogAvkNonprogrammeEleveeResSemiurgentComponent', () => {
  let component: DialogAvkNonprogrammeEleveeResSemiurgentComponent;
  let fixture: ComponentFixture<DialogAvkNonprogrammeEleveeResSemiurgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkNonprogrammeEleveeResSemiurgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkNonprogrammeEleveeResSemiurgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
