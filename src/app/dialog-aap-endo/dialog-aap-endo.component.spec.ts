import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoComponent } from './dialog-aap-endo.component';

describe('DialogAapEndoComponent', () => {
  let component: DialogAapEndoComponent;
  let fixture: ComponentFixture<DialogAapEndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
