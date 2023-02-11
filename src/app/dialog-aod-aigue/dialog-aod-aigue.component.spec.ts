import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodAigueComponent } from './dialog-aod-aigue.component';

describe('DialogAodAigueComponent', () => {
  let component: DialogAodAigueComponent;
  let fixture: ComponentFixture<DialogAodAigueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodAigueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodAigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
