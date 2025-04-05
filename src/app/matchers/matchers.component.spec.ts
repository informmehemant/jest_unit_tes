import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // this for matchers
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Exact Eqaulity
  it('2 + 2  = 4', () => {
    expect(2+2).toBe(4);
  })
  // for values and Object
  it('Object values', () => {
    const data = {name: "hemantOnBengloreValley"}
    expect(data).toEqual({name: "hemantOnBengloreValley"})
  })

  // Truthiness

  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).toBeDefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  it('zero', () => {
    const n = 0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).toBeDefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  // testing floating number
 it('adding Floatin point number', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3) // this will not work because of rounding error
  expect(value).toBeCloseTo(0.3) // this will work
 })

 // String
 it('there is no D in techops', () => {
  expect('techops').not.toMatch(/D/);
 })
 it('but there is a "world in techopsworld"', () => {
  expect('techopsworld').toMatch(/world/);
 })
 it('the shopping list has milk on it', () => {
  const shoppingList = [
    'diapers',
    'brush',
    'milk',
    'trash bags',
    'paper towels'
  ]
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk')
 })
});
