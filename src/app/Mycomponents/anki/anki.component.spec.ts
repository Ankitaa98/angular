import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkiComponent } from './anki.component';

describe('AnkiComponent', () => {
  let component: AnkiComponent;
  let fixture: ComponentFixture<AnkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
