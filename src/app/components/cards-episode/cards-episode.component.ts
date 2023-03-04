import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-episode',
  templateUrl: './cards-episode.component.html',
  styleUrls: ['./cards-episode.component.scss']
})
export class CardsEpisodeComponent {
  @Input() episode: any;
  @Input() character: any;

}
