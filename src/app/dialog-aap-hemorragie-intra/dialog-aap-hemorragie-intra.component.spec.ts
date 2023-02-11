import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieIntraComponent } from './dialog-aap-hemorragie-intra.component';

describe('DialogAapHemorragieIntraComponent', () => {
  let component: DialogAapHemorragieIntraComponent;
  let fixture: ComponentFixture<DialogAapHemorragieIntraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieIntraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieIntraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
