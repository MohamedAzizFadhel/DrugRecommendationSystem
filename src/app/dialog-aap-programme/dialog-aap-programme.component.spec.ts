import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapProgrammeComponent } from './dialog-aap-programme.component';

describe('DialogAapProgrammeComponent', () => {
  let component: DialogAapProgrammeComponent;
  let fixture: ComponentFixture<DialogAapProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
