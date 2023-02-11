import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodNonprogrammeDabiRisqueComponent } from './dialog-aod-nonprogramme-dabi-risque.component';

describe('DialogAodNonprogrammeDabiRisqueComponent', () => {
  let component: DialogAodNonprogrammeDabiRisqueComponent;
  let fixture: ComponentFixture<DialogAodNonprogrammeDabiRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodNonprogrammeDabiRisqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodNonprogrammeDabiRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
