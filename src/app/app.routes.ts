import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'; 
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErroComponent} from './pages/erro/erro.component';
import { EsquecisenhaComponent} from './pages/esquecisenha/esquecisenha.component';
import { RedefinirsenhaComponent} from './pages/redefinirsenha/redefinirsenha.component';
import { AlunosComponent} from './pages/alunos/alunos.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  //DIRETOR ACESSA TUDO
  // Rotas protegidas pelo AuthGuard
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'erro/:codigo', component: ErroComponent },
  { path: 'esquecisenha', component: EsquecisenhaComponent},
  { path: 'redefinirsenha', component: RedefinirsenhaComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'atividades', component: AtividadesComponent},


  // Rota coringa para redirecionar caso o usuário tente acessar uma página inexistente
  { path: '**', redirectTo: 'login' }
];
