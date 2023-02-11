import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonComponent } from './dialog-aap-nonprogramme-act-non.component';

describe('DialogAapNonprogrammeActNonComponent', () => {
  let component: DialogAapNonprogrammeActNonComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
