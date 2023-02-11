import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieNongraveComponent } from './dialog-aap-hemorragie-nongrave.component';

describe('DialogAapHemorragieNongraveComponent', () => {
  let component: DialogAapHemorragieNongraveComponent;
  let fixture: ComponentFixture<DialogAapHemorragieNongraveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieNongraveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieNongraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
