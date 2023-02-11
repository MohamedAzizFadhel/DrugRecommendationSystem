import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeXabanComponent } from './dialog-aod-nonprogramme-xaban.component';

describe('DialogAodNonprogrammeXabanComponent', () => {
  let component: DialogAodNonprogrammeXabanComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeXabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeXabanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeXabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
