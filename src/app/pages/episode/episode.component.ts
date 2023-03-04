import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {

  episodes?: any[];

  constructor(private rickAndMortyService: ApiService) { }

  ngOnInit() {
    this.rickAndMortyService.getEpisodes().subscribe(response => {
      this.episodes = response.results;
    });
  }
}