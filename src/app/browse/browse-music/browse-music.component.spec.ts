import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMusicComponent } from './browse-music.component';

describe('BrowseMusicComponent', () => {
  let component: BrowseMusicComponent;
  let fixture: ComponentFixture<BrowseMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
