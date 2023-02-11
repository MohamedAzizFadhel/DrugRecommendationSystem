import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodProgrammeComponent } from './dialog-aod-programme.component';

describe('DialogAodProgrammeComponent', () => {
  let component: DialogAodProgrammeComponent;
  let fixture: ComponentFixture<DialogAodProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
