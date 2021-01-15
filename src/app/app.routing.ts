import { Routes, RouterModule } from '@angular/router'

import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthTokenGuard } from './auth-token.guard';
import { FormularioComponent } from './views/formulario/formulario.component';
import { HomeComponent } from './views/home/home.component';
import { ListagemComponent } from './views/listagem/listagem.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'listagem', component: ListagemComponent, canActivate: [AuthTokenGuard]},
    { path: 'cadastro', component: FormularioComponent, canActivate: [AuthTokenGuard]},
    { path: 'atualizar/:id', component: FormularioComponent, canActivate: [AuthTokenGuard]},
    { path: '**',component: NotFoundComponent}
];

export const routers = RouterModule.forRoot(appRoutes);