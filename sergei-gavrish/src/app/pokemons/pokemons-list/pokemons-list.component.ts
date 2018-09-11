import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../shared/models/pokemon';
import { PokemonsService } from '../../shared/services/pokemons.service';

@Component({
  selector: 'pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(
    private service: PokemonsService
  ) { }

  ngOnInit() {
    this.service.startLoad();
    this.getPokemons()
  }

  getPokemons(): void {
    this.service.getPokemons()
      .subscribe(_ => this.pokemons = this.service.pokemons);
  }

  loadPage(): void {
    this.getPokemons();
  }
}
