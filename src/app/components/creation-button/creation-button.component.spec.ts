import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationButtonComponent } from './creation-button.component';

describe('CreationButtonComponent', () => {
  let component: CreationButtonComponent;
  let fixture: ComponentFixture<CreationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
