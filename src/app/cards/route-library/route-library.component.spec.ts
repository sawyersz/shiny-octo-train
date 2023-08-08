import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLibraryComponent } from './route-library.component';

describe('RouteLibraryComponent', () => {
  let component: RouteLibraryComponent;
  let fixture: ComponentFixture<RouteLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
