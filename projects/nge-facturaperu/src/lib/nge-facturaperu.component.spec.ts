import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgeFacturaperuComponent } from './nge-facturaperu.component';

describe('NgeFacturaperuComponent', () => {
  let component: NgeFacturaperuComponent;
  let fixture: ComponentFixture<NgeFacturaperuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgeFacturaperuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgeFacturaperuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
