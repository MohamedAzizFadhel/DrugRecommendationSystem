import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresUrgentComponent } from './dialog-aap-nonprogramme-act-non-degres-urgent.component';

describe('DialogAapNonprogrammeActNonDegresUrgentComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresUrgentComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresUrgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresUrgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
