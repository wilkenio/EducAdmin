import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessoresComponent } from './professores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

// Local ProfessoresService declaration to satisfy DI in tests when original service file isn't available
class ProfessoresService {
  listar() {
    return of([]);
  }
  adicionar(prof: any) {
    return of(prof);
  }
  deletar(id: number) {
    return of(void 0);
  }
}

// Mock do serviço
class MockProfessoresService {
  listar() {
    return of([]);
  }
  adicionar(prof: any) {
    return of(prof);
  }
  deletar(id: number) {
    return of(void 0);
  }
}

describe('ProfessoresComponent', () => {
  let component: ProfessoresComponent;
  let fixture: ComponentFixture<ProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ProfessoresComponent],
      providers: [
        { provide: ProfessoresService, useClass: MockProfessoresService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
