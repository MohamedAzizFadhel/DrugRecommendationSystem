import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleComponent } from './dialog-aod-orale.component';

describe('DialogAodOraleComponent', () => {
  let component: DialogAodOraleComponent;
  let fixture: ComponentFixture<DialogAodOraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
