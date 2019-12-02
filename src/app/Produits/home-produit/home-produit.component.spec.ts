import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProduitComponent } from './home-produit.component';

describe('HomeProduitComponent', () => {
  let component: HomeProduitComponent;
  let fixture: ComponentFixture<HomeProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
