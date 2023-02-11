import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveGesteComponent } from './dialog-aod-aigue-gravite-grave-geste.component';

describe('DialogAodAigueGraviteGraveGesteComponent', () => {
  let component: DialogAodAigueGraviteGraveGesteComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveGesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveGesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveGesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
