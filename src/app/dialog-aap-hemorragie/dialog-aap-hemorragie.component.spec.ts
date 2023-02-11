import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieComponent } from './dialog-aap-hemorragie.component';

describe('DialogAapHemorragieComponent', () => {
  let component: DialogAapHemorragieComponent;
  let fixture: ComponentFixture<DialogAapHemorragieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
