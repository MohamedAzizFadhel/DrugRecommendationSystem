import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkNonprogrammeEleveeComponent } from './dialog-avk-nonprogramme-elevee.component';

describe('DialogAvkNonprogrammeEleveeComponent', () => {
  let component: DialogAvkNonprogrammeEleveeComponent;
  let fixture: ComponentFixture<DialogAvkNonprogrammeEleveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkNonprogrammeEleveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkNonprogrammeEleveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
