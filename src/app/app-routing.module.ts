import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CstComponent } from './profile/cst/cst.component';
import { IndComponent } from './profile/ind/ind.component';
import { AdrComponent } from './profile/adr/adr.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', pathMatch: 'prefix', redirectTo: 'cst' },
      { path: 'cst', component: CstComponent },
      { path: 'ind', component: IndComponent },
      { path: 'adr', component: AdrComponent },
    ]
  },
  {
    path: 'directory',
    component: DirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
