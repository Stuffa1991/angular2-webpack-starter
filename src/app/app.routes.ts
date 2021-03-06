import { Routes } from '@angular/router';
import { FrontPageComponent } from './frontpage';
import { ContactComponent } from './contact';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: FrontPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', loadChildren: './+products#ProductsModule'},
  { path: '**', component: NoContentComponent },
];
