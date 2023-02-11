import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodComponent } from './dialog-aod.component';

describe('DialogAodComponent', () => {
  let component: DialogAodComponent;
  let fixture: ComponentFixture<DialogAodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
