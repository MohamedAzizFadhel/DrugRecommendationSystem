import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAapOraleMonoRisqueComponent } from './dialog-aap-orale-mono-risque.component';

describe('DialogAapOraleMonoRisqueComponent', () => {
  let component: DialogAapOraleMonoRisqueComponent;
  let fixture: ComponentFixture<DialogAapOraleMonoRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAapOraleMonoRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAapOraleMonoRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
