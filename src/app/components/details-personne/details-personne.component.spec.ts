import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersonneComponent } from './details-personne.component';

describe('DetailPersonneComponent', () => {
  let component: DetailPersonneComponent;
  let fixture: ComponentFixture<DetailPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
