import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelThereOneComponent } from './products-level-there-one.component';

describe('ProductsLevelThereOneComponent', () => {
  let component: ProductsLevelThereOneComponent;
  let fixture: ComponentFixture<ProductsLevelThereOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLevelThereOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLevelThereOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
