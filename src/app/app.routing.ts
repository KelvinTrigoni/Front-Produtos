import { PaisesComponent } from './views/paises/paises.component';
import { Routes, RouterModule } from '@angular/router'

import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthTokenGuard } from './auth-token.guard';
import { FormularioComponent } from './views/formulario/formulario.component';
import { HomeComponent } from './views/home/home.component';
import { ListagemComponent } from './views/listagem/listagem.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'listagem', component: ListagemComponent, canActivate: [AuthTokenGuard]},
    { path: 'cadastro', component: FormularioComponent, canActivate: [AuthTokenGuard]},
    { path: 'atualizar/:id', component: FormularioComponent, canActivate: [AuthTokenGuard]},
    { path: 'paises', component: PaisesComponent},
    { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)},
    { path: '**',component: NotFoundComponent},
];

export const routers = RouterModule.forRoot(appRoutes);
