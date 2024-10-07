import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jugadores4Page } from './jugadores4.page';

describe('Jugadores4Page', () => {
  let component: Jugadores4Page;
  let fixture: ComponentFixture<Jugadores4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugadores4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
