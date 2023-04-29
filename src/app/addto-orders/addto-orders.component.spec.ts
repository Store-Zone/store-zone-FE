import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoOrdersComponent } from './addto-orders.component';

describe('AddtoOrdersComponent', () => {
  let component: AddtoOrdersComponent;
  let fixture: ComponentFixture<AddtoOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtoOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtoOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
