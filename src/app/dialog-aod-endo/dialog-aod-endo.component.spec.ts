import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodEndoComponent } from './dialog-aod-endo.component';

describe('DialogAodEndoComponent', () => {
  let component: DialogAodEndoComponent;
  let fixture: ComponentFixture<DialogAodEndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodEndoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodEndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
