import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteComponent } from './dialog-aod-aigue-gravite.component';

describe('DialogAodAigueGraviteComponent', () => {
  let component: DialogAodAigueGraviteComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
