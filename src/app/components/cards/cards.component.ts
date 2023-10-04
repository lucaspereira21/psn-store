import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  gameCover:string=""
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string="XPTO | PS4"
  @Input()
  gamePrice:string="399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
