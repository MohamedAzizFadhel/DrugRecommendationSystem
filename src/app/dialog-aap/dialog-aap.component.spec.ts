import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapComponent } from './dialog-aap.component';

describe('DialogAapComponent', () => {
  let component: DialogAapComponent;
  let fixture: ComponentFixture<DialogAapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
