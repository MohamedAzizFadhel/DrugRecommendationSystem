import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveComponent } from './dialog-aod-aigue-gravite-grave.component';

describe('DialogAodAigueGraviteGraveComponent', () => {
  let component: DialogAodAigueGraviteGraveComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
