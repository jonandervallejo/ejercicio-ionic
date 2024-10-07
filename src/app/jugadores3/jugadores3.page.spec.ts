import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jugadores3Page } from './jugadores3.page';

describe('Jugadores3Page', () => {
  let component: Jugadores3Page;
  let fixture: ComponentFixture<Jugadores3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugadores3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
