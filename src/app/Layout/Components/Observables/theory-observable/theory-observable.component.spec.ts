import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryObservableComponent } from './theory-observable.component';

describe('TheoryObservableComponent', () => {
  let component: TheoryObservableComponent;
  let fixture: ComponentFixture<TheoryObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoryObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoryObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
