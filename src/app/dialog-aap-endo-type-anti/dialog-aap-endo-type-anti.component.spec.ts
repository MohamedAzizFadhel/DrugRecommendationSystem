import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapEndoTypeAntiComponent } from './dialog-aap-endo-type-anti.component';

describe('DialogAapEndoTypeAntiComponent', () => {
  let component: DialogAapEndoTypeAntiComponent;
  let fixture: ComponentFixture<DialogAapEndoTypeAntiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapEndoTypeAntiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapEndoTypeAntiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
