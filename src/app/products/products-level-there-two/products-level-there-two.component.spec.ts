import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelThereTwoComponent } from './products-level-there-two.component';

describe('ProductsLevelThereTwoComponent', () => {
  let component: ProductsLevelThereTwoComponent;
  let fixture: ComponentFixture<ProductsLevelThereTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLevelThereTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLevelThereTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
