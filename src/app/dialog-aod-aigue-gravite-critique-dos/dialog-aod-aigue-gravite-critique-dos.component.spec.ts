import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteCritiqueDosComponent } from './dialog-aod-aigue-gravite-critique-dos.component';

describe('DialogAodAigueGraviteCritiqueDosComponent', () => {
  let component: DialogAodAigueGraviteCritiqueDosComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteCritiqueDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteCritiqueDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteCritiqueDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
