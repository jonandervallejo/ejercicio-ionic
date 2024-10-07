import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jugadores2Page } from './jugadores2.page';

describe('Jugadores2Page', () => {
  let component: Jugadores2Page;
  let fixture: ComponentFixture<Jugadores2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugadores2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
