import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAntiResComponent } from './dialog-aap-endo-type-anti-res.component';

describe('DialogAapEndoTypeAntiResComponent', () => {
  let component: DialogAapEndoTypeAntiResComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAntiResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAntiResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAntiResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
