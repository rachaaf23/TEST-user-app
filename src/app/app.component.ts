import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UtilisateurListComponent } from "./utilisateur-list/utilisateur-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UtilisateurListComponent ,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ajout du "s" ici
})
export class AppComponent {
  title = 'CM Consulting ';
}
