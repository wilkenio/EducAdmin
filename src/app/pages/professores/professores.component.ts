import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiProfessoresService } from '../../core/services/ApiProfessores/ApiProfessores.service';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';
import { Professor } from '../../shared/models/professor.model';

@Component({
  selector: 'app-professores',
  standalone: true,
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    SideBarComponent,
    TopBarComponent
  ]
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];

  novoProfessor: Professor = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    qualificacao: '',
    materiaDepartamento: '',
    professorAtivo: true,
    biografia: ''
  };

  filtroNome: string = '';
  filtroMateria: string = '';

  professorSelecionado: Professor | null = null;

  constructor(private professoresService: ApiProfessoresService) { }

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professoresService.getAll().subscribe({
      next: (data) => this.professores = data,
      error: (err) => console.error('Erro ao carregar professores', err)
    });
  }

  adicionarProfessor(form: any) {
    if (form.invalid) return;

    this.professoresService.create(this.novoProfessor).subscribe({
      next: (prof) => {
        this.professores.push(prof);
        form.resetForm({ professorAtivo: true });

        this.novoProfessor = {
          nomeCompleto: '',
          email: '',
          telefone: '',
          qualificacao: '',
          materiaDepartamento: '',
          professorAtivo: true,
          biografia: ''
        };
      },
      error: (err) => console.error('Erro ao adicionar professor', err)
    });
  }

  deletarProfessor(id?: number) {
    if (!id) return;
    if (!confirm('Deseja realmente excluir este professor?')) return;

    this.professoresService.delete(id).subscribe({
      next: () => this.carregarProfessores(),
      error: (err) => console.error('Erro ao deletar professor', err)
    });
  }

  abrirBiografia(prof: Professor) {
    this.professorSelecionado = prof;
    const modal = document.getElementById('modalBiografia');
    if (modal) modal.style.display = 'flex';
  }

  fecharModal() {
    const modal = document.getElementById('modalBiografia');
    if (modal) modal.style.display = 'none';
    this.professorSelecionado = null;
  }


  professoresFiltrados() {
    return this.professores.filter(p => {
      const nomeMatch =
        !this.filtroNome ||
        p.nomeCompleto.toLowerCase().includes(this.filtroNome.toLowerCase()) ||
        p.email.toLowerCase().includes(this.filtroNome.toLowerCase());

      const materiaMatch =
        !this.filtroMateria ||
        p.materiaDepartamento.toLowerCase() === this.filtroMateria.toLowerCase();

      return nomeMatch && materiaMatch;
    });
  }
}
