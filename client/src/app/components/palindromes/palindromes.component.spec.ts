import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromesComponent } from './palindromes.component';

describe('PalindromesComponent', () => {
  let component: PalindromesComponent;
  let fixture: ComponentFixture<PalindromesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
