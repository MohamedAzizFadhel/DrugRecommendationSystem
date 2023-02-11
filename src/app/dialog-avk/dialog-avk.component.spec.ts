import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAVKComponent } from './dialog-avk.component';

describe('DialogAVKComponent', () => {
  let component: DialogAVKComponent;
  let fixture: ComponentFixture<DialogAVKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAVKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAVKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
