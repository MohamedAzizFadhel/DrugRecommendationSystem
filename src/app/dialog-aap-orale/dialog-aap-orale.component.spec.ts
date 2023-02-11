import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleComponent } from './dialog-aap-orale.component';

describe('DialogAapOraleComponent', () => {
  let component: DialogAapOraleComponent;
  let fixture: ComponentFixture<DialogAapOraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
