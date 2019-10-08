import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRestaurantsComponent } from './details-restaurants.component';

describe('DetailsRestaurantsComponent', () => {
  let component: DetailsRestaurantsComponent;
  let fixture: ComponentFixture<DetailsRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
