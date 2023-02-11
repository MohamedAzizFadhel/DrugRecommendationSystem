import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueGraviteCritiqueComponent } from './dialog-aod-aigue-gravite-critique.component';

describe('DialogAodAigueGraviteCritiqueComponent', () => {
  let component: DialogAodAigueGraviteCritiqueComponent;
  let fixture: ComponentFixture<DialogAodAigueGraviteCritiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueGraviteCritiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueGraviteCritiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
