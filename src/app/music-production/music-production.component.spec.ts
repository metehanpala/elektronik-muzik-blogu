import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicProductionComponent } from './music-production.component';

describe('MusicProductionComponent', () => {
  let component: MusicProductionComponent;
  let fixture: ComponentFixture<MusicProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
