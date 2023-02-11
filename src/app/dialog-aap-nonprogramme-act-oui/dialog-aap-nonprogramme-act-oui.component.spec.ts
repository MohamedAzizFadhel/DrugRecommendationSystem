import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActOuiComponent } from './dialog-aap-nonprogramme-act-oui.component';

describe('DialogAapNonprogrammeActOuiComponent', () => {
  let component: DialogAapNonprogrammeActOuiComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
