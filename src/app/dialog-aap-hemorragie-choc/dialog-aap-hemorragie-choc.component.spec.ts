import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieChocComponent } from './dialog-aap-hemorragie-choc.component';

describe('DialogAapHemorragieChocComponent', () => {
  let component: DialogAapHemorragieChocComponent;
  let fixture: ComponentFixture<DialogAapHemorragieChocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieChocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieChocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
