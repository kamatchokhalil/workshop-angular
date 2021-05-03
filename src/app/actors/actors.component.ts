import { Component, OnInit } from '@angular/core';
import {Actor} from '../../model/Actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
 listActors: Actor[];
  constructor() { }

  ngOnInit(): void {
    this.listActors = [
      {lastName: 'Robert', firstName: 'Julia'},
      {lastName: 'Walker', firstName: 'Paul'},
      {lastName: 'Pitt', firstName: 'Brad'}
    ];
  }

  refreshListOfActors(itemDeleted: Actor){
    let index = this.listActors.indexOf(itemDeleted);
    this.listActors.splice(0,1);
  }

}
