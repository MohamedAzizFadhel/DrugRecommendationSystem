import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeComponent } from './dialog-aod-nonprogramme.component';

describe('DialogAodNonprogrammeComponent', () => {
  let component: DialogAodNonprogrammeComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
