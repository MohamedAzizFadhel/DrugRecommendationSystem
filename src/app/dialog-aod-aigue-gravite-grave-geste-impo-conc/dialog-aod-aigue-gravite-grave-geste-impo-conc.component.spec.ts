import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveGesteImpoConcComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc.component';

describe('DialogAodAigueGraviteGraveGesteImpoConcComponent', () => {
  let component: DialogAodAigueGraviteGraveGesteImpoConcComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveGesteImpoConcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveGesteImpoConcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveGesteImpoConcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
