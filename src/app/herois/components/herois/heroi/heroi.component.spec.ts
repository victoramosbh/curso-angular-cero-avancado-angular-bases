import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiComponent } from './heroi.component';

describe('HeroiComponent', () => {
  let component: HeroiComponent;
  let fixture: ComponentFixture<HeroiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroiComponent]
    });
    fixture = TestBed.createComponent(HeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
