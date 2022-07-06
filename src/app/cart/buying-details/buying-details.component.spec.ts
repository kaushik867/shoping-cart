import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingDetailsComponent } from './buying-details.component';

describe('BuyingDetailsComponent', () => {
  let component: BuyingDetailsComponent;
  let fixture: ComponentFixture<BuyingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
