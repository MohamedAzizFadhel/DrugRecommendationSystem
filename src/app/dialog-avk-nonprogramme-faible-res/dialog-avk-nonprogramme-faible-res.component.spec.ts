import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkNonprogrammeFaibleResComponent } from './dialog-avk-nonprogramme-faible-res.component';

describe('DialogAvkNonprogrammeFaibleResComponent', () => {
  let component: DialogAvkNonprogrammeFaibleResComponent;
  let fixture: ComponentFixture<DialogAvkNonprogrammeFaibleResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkNonprogrammeFaibleResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkNonprogrammeFaibleResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
