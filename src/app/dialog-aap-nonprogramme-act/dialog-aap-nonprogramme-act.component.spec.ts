import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActComponent } from './dialog-aap-nonprogramme-act.component';

describe('DialogAapNonprogrammeActComponent', () => {
  let component: DialogAapNonprogrammeActComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
