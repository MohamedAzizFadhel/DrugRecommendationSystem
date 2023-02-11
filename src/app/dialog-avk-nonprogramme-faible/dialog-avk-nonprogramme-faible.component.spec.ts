import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkNonprogrammeFaibleComponent } from './dialog-avk-nonprogramme-faible.component';

describe('DialogAvkNonprogrammeFaibleComponent', () => {
  let component: DialogAvkNonprogrammeFaibleComponent;
  let fixture: ComponentFixture<DialogAvkNonprogrammeFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkNonprogrammeFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkNonprogrammeFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
