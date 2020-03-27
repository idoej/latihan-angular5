import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RupiahPipe} from '../../../pipes/rupiah.pipe';
import localeId from '@angular/common/locales/id';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeId, 'id');

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent, RupiahPipe ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
