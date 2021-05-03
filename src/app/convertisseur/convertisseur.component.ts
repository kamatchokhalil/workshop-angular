import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {

  txtMontant: number;
  bb: number;
  constructor() { }

  ngOnInit(): void {
    this.txtMontant = 0;
  }

  showDataReceived(flous){
    this.bb = flous;
    return flous;
  }

  getData(flous) {
    this.bb = flous;
    return flous;
  }
}
