import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrComponent } from './adr.component';

describe('AdrComponent', () => {
  let component: AdrComponent;
  let fixture: ComponentFixture<AdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
