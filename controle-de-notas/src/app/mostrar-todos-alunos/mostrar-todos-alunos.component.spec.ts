import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTodosAlunosComponent } from './mostrar-todos-alunos.component';

describe('MostrarTodosAlunosComponent', () => {
  let component: MostrarTodosAlunosComponent;
  let fixture: ComponentFixture<MostrarTodosAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTodosAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTodosAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
