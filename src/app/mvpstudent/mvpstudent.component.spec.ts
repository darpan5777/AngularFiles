import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVPstudentComponent } from './mvpstudent.component';

describe('MVPstudentComponent', () => {
  let component: MVPstudentComponent;
  let fixture: ComponentFixture<MVPstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MVPstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MVPstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
