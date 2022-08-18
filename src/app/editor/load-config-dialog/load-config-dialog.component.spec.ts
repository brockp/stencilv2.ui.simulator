import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadConfigDialogComponent } from './load-config-dialog.component';

describe('LoadConfigDialogComponent', () => {
  let component: LoadConfigDialogComponent;
  let fixture: ComponentFixture<LoadConfigDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadConfigDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
