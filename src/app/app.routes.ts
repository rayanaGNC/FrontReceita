import { Routes } from '@angular/router';
import { ListagemComponent } from './reservas/listagem/listagem.component';
import { CadastroComponent } from './reservas/cadastro/cadastro.component';
import { EdicaoComponent } from './reservas/edicao/edicao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },

  { path: 'listagem', component: ListagemComponent },

  { path: 'cadastro', component: CadastroComponent },

  { path: 'edicao/:id', component: EdicaoComponent },
];
