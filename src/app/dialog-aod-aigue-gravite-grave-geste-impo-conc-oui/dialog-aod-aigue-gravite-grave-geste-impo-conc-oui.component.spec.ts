import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveGesteImpoConcOuiComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc-oui.component';

describe('DialogAodAigueGraviteGraveGesteImpoConcOuiComponent', () => {
  let component: DialogAodAigueGraviteGraveGesteImpoConcOuiComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveGesteImpoConcOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveGesteImpoConcOuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveGesteImpoConcOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
