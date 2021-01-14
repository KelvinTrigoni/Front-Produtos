import { Routes, RouterModule } from '@angular/router'

import { FormularioComponent } from './views/formulario/formulario.component';
import { HomeComponent } from './views/home/home.component';
import { ListagemComponent } from './views/listagem/listagem.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'listagem', component: ListagemComponent},
    { path: 'cadastro', component: FormularioComponent},
    { path: 'atualizar/:id', component: FormularioComponent},
    // { path: 'teste',component: }

    // { path: '**',component: }
];

export const routers = RouterModule.forRoot(appRoutes);