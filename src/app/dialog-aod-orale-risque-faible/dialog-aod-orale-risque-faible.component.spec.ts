import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAodOraleRisqueFaibleComponent } from './dialog-aod-orale-risque-faible.component';

describe('DialogAodOraleRisqueFaibleComponent', () => {
  let component: DialogAodOraleRisqueFaibleComponent;
  let fixture: ComponentFixture<DialogAodOraleRisqueFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAodOraleRisqueFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAodOraleRisqueFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
