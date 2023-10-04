import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-label',
  templateUrl: './cards-label.component.html',
  styleUrls: ['./cards-label.component.css']
})
export class CardsLabelComponent implements OnInit {

  @Input()
  gameLabel:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
