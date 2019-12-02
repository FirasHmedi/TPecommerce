import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsListComponent } from './produits-list.component';

describe('ProduitsListComponent', () => {
  let component: ProduitsListComponent;
  let fixture: ComponentFixture<ProduitsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
