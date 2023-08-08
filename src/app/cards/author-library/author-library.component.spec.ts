import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorLibraryComponent } from './author-library.component';

describe('AuthorLibraryComponent', () => {
  let component: AuthorLibraryComponent;
  let fixture: ComponentFixture<AuthorLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
