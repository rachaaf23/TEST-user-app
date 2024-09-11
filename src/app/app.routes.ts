import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './utilisateur-details/utilisateur-details.component';

// Définition des routes de l'application
export const routes: Routes = [
  { path: 'utilisateur', component: UtilisateurListComponent },
  { path: 'create-utilisateur', component: CreateUtilisateurComponent },
  { path: '', redirectTo: 'utilisateur', pathMatch: 'full' },
  { path: 'update-utilisateur/:id' , component:UpdateUtilisateurComponent},
  { path: 'utilisateur-details/:id', component:UtilisateurDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuration des routes principales de l'application
  exports: [RouterModule]  // Exportation du module de routage
})
export class AppRoutingModule { }
