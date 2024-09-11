import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  standalone: true,
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  imports: [CommonModule, HttpClientModule, RouterOutlet, RouterLink, RouterLinkActive], // Include HttpClientModule here
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
  
  utilisateurs: Utilisateur[] = []; // Renamed to plural for clarity

  constructor(private utilisateurService: UtilisateurService, private router: Router) {}

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  private getUtilisateurs() {
    this.utilisateurService.getUtilisateurList().subscribe(data => {
      this.utilisateurs = data;
    });
  }

  detailsUtilisateur(id: number) {
    this.router.navigate(['utilisateur-details', id]); // Corrected navigation array syntax
  }

  updateUtilisateur(id: number) {
    this.router.navigate(['update-utilisateur', id]); // Corrected navigation array syntax
  }

  deleteUtilisateur(id: number) {
    this.utilisateurService.deleteUtilisateur(id).subscribe(data => {
      console.log(data);
      this.getUtilisateurs();
    });
  }
}
