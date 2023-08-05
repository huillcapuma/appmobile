import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperacontrasenaPage } from './recuperacontrasena.page';

describe('RecuperacontrasenaPage', () => {
  let component: RecuperacontrasenaPage;
  let fixture: ComponentFixture<RecuperacontrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperacontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
