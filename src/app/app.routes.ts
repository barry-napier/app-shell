import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'app-claims',
        exposedModule: './claims',
      }).then((m) => m.AppComponent),
  },
  {
    path: 'coverage',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'app-coverage',
        exposedModule: './coverage',
      }).then((m) => m.AppComponent),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
