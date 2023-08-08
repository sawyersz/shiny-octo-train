import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLibraryComponent } from './code-library.component';

describe('CodeLibraryComponent', () => {
  let component: CodeLibraryComponent;
  let fixture: ComponentFixture<CodeLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
