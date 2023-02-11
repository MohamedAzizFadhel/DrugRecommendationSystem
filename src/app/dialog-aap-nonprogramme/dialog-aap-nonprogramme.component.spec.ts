import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeComponent } from './dialog-aap-nonprogramme.component';

describe('DialogAapNonprogrammeComponent', () => {
  let component: DialogAapNonprogrammeComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
