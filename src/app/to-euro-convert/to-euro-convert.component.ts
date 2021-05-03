import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent implements OnInit {

  @Input()montantEnvoye: number;
  montantEuro: number;
  @Output() eventSended = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.montantEuro = 0;
  }

  convertToEuro(){
    this.montantEuro = this.montantEnvoye / 3.32;
    return this.montantEuro;
  }

  sendNotif(){
    this.eventSended.emit(this.convertToEuro());
  }
}
