import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() cardsData: Card[] = [];
}
