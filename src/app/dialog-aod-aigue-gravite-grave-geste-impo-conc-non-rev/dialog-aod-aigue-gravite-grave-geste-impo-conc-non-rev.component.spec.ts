import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent } from './dialog-aod-aigue-gravite-grave-geste-impo-conc-non-rev.component';

describe('DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent', () => {
  let component: DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteGraveGesteImpoConcNonRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
