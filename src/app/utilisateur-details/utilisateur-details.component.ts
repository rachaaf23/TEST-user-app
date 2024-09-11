import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Utilisateur } from '../utilisateur';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Added necessary imports
  templateUrl: './utilisateur-details.component.html',
  styleUrls: ['./utilisateur-details.component.css'] // Corrected property name to 'styleUrls'
})
export class UtilisateurDetailsComponent implements OnInit {
  
  id!: number;
  utilisateur: Utilisateur = new Utilisateur(); // Initialization in one place is sufficient

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // Fetch utilisateur details by ID
    this.utilisateurService.getUtilisateurById(this.id).subscribe(data => {
      this.utilisateur = data;
    });
  }
}
