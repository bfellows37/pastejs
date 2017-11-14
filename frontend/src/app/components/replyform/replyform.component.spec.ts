import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyformComponent } from './replyform.component';

describe('ReplyformComponent', () => {
  let component: ReplyformComponent;
  let fixture: ComponentFixture<ReplyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
