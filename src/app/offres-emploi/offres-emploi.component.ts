import { Component, OnInit } from '@angular/core';
import {Emploi} from '../../model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listeEmploi: Emploi[];
  nbrOffNC: number;
  txtSearch: string;
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi = [
      {reference: 'A2201', titre: 'Groupe hôteliere', entreprise: 'Abou Nawas', etat: true},
      {reference: 'AITA', titre: 'Compagnie aérienne privée de Tunisie', entreprise: 'Nouvelair', etat: false},
      {reference: '963320-PvT', titre: 'Service Postal', entreprise: 'La Poste tunisienne', etat: true},
      {reference: '76BN20', titre: ' banque publique tunisienne', entreprise: 'BNA', etat: false},
      {reference: '98889-DD', titre: 'groupe tunisien de l\'industrie agroalimentaire', entreprise: 'Goupe Délice', etat: true},
      ];
  }

  getNbrOffresNC(){
   let cpt = 0;
   for (let i = 0; i < this.listeEmploi.length ; i++){
     if (this.listeEmploi[i].etat === true){
       cpt++;
     }
   }
   this.nbrOffNC = cpt;
  }

}
