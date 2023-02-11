import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveGesteImpoComponent } from './dialog-aod-aigue-gravite-grave-geste-impo.component';

describe('DialogAodAigueGraviteGraveGesteImpoComponent', () => {
  let component: DialogAodAigueGraviteGraveGesteImpoComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveGesteImpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveGesteImpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveGesteImpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
