import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieIntraIndicationComponent } from './dialog-aap-hemorragie-intra-indication.component';

describe('DialogAapHemorragieIntraIndicationComponent', () => {
  let component: DialogAapHemorragieIntraIndicationComponent;
  let fixture: ComponentFixture<DialogAapHemorragieIntraIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieIntraIndicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieIntraIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
