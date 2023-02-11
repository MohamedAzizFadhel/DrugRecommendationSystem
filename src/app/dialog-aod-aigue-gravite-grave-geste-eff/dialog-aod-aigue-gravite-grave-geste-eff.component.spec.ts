import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveGesteEffComponent } from './dialog-aod-aigue-gravite-grave-geste-eff.component';

describe('DialogAodAigueGraviteGraveGesteEffComponent', () => {
  let component: DialogAodAigueGraviteGraveGesteEffComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveGesteEffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveGesteEffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveGesteEffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
