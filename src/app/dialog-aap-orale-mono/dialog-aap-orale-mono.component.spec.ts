import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleMonoComponent } from './dialog-aap-orale-mono.component';

describe('DialogAapOraleMonoComponent', () => {
  let component: DialogAapOraleMonoComponent;
  let fixture: ComponentFixture<DialogAapOraleMonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleMonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleMonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
