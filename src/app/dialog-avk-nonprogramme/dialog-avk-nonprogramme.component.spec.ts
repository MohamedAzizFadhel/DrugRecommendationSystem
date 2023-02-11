import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkNonprogrammeComponent } from './dialog-avk-nonprogramme.component';

describe('DialogAvkNonprogrammeComponent', () => {
  let component: DialogAvkNonprogrammeComponent;
  let fixture: ComponentFixture<DialogAvkNonprogrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkNonprogrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkNonprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
