import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapHemorragieGraveComponent } from './dialog-aap-hemorragie-grave.component';

describe('DialogAapHemorragieGraveComponent', () => {
  let component: DialogAapHemorragieGraveComponent;
  let fixture: ComponentFixture<DialogAapHemorragieGraveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapHemorragieGraveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapHemorragieGraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
