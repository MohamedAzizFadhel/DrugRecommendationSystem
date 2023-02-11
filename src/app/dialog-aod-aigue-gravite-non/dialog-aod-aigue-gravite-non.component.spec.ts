import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteNonComponent } from './dialog-aod-aigue-gravite-non.component';

describe('DialogAodAigueGraviteNonComponent', () => {
  let component: DialogAodAigueGraviteNonComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
