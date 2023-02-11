import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapNonprogrammeActNonDegresComponent } from './dialog-aap-nonprogramme-act-non-degres.component';

describe('DialogAapNonprogrammeActNonDegresComponent', () => {
  let component: DialogAapNonprogrammeActNonDegresComponent;
  let fixture: ComponentFixture<DialogAapNonprogrammeActNonDegresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapNonprogrammeActNonDegresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapNonprogrammeActNonDegresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
