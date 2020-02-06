import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJugadorComponent } from './add-jugador.component';

describe('AddJugadorComponent', () => {
  let component: AddJugadorComponent;
  let fixture: ComponentFixture<AddJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
