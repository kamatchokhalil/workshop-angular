import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../model/Actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
@Input() itemActor: Actor;
@Output() deleteItemEvent = new EventEmitter<Actor>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteActor(){
    this.deleteItemEvent.emit(this.itemActor);
  }
}
