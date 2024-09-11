import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-update-utilisateur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent {
  utilisateur :Utilisateur = new Utilisateur() ;

  id!: number;

  constructor(private utilisateurService : UtilisateurService , private Route: ActivatedRoute , private router: Router){ }

  ngOnInit(): void{
    this.id = this.Route.snapshot.params['id'];

    this.utilisateurService.getUtilisateurById(this.id).subscribe( data =>{
      this.utilisateur = data ; 
    }  ,
  error => console.log(error));
  }

  onSubmit() {
this.utilisateurService.updateUtilisateur(this.id , this.utilisateur).subscribe( data =>{
  this.goToUtilisateurList()

} , error => console.log(error));
  }

  goToUtilisateurList() {
    this.router.navigate(['/utilisateur']);
  }
}
