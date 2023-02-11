import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueCritiqueComponent } from './dialog-aod-orale-risque-critique.component';

describe('DialogAodOraleRisqueCritiqueComponent', () => {
  let component: DialogAodOraleRisqueCritiqueComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueCritiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueCritiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueCritiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
