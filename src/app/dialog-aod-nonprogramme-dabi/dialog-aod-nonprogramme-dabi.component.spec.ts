import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiComponent } from './dialog-aod-nonprogramme-dabi.component';

describe('DialogAodNonprogrammeDabiComponent', () => {
  let component: DialogAodNonprogrammeDabiComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
