import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousHeaderComponent } from './sous-header.component';

describe('SousHeaderComponent', () => {
  let component: SousHeaderComponent;
  let fixture: ComponentFixture<SousHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
