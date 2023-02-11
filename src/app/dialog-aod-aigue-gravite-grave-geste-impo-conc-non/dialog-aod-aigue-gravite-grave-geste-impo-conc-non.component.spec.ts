import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveGesteImpoConcNonComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc-non.component';

describe('DialogAodAigueGraviteGraveGesteImpoConcNonComponent', () => {
  let component: DialogAodAigueGraviteGraveGesteImpoConcNonComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveGesteImpoConcNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveGesteImpoConcNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveGesteImpoConcNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
