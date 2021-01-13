import { Routes, RouterModule } from '@angular/router'
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { ListagemComponent } from './views/listagem/listagem.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'listagem', component: ListagemComponent},
    { path: 'cadastro', component: CadastroComponent},
    // { path: 'teste',component: }

    // { path: '**',component: }
];

export const routers = RouterModule.forRoot(appRoutes);