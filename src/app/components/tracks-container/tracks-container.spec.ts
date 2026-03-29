import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksContainer } from './tracks-container';

describe('TracksContainer', () => {
  let component: TracksContainer;
  let fixture: ComponentFixture<TracksContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracksContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
