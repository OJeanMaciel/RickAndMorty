import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  
  characters?: any[];
  page: number = 1;

  constructor(private rickAndMortyService: ApiService) { }

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe((response: any) => {
      this.characters = response.results;
    });
  }
}