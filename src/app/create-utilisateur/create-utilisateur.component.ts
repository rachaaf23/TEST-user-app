import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-utilisateur',
  standalone: true,
  imports: [FormsModule], // Ajouter FormsModule ici
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {
[x: string]: any;
  utilisateur: Utilisateur = new Utilisateur();
  
  constructor(private utilisateurService: UtilisateurService, private router: Router) {}

  ngOnInit(): void {}

  saveUtilisateur() {
    this.utilisateurService.createUtilisateur(this.utilisateur).subscribe({
      next: (data) => {
        console.log(data);
        this.goToUtilisateurList();
      },
      error: (error) => console.log(error)
    });
  }

  goToUtilisateurList() {
    this.router.navigate(['/utilisateur']);
  }

  onSubmit() {
    // Votre logique pour gérer le formulaire à la soumission
    console.log(this.utilisateur);
    this.saveUtilisateur();
  }
}

