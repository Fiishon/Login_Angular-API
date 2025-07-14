import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css'],
  imports: [CommonModule, FormsModule]
})
export class Pokemon implements OnInit {
  pokemon = signal<any[]>([]);
  pokemonFiltrados = signal<any[]>([]);
  filtroNombre = '';
  pokemonSeleccionado: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(response => {
      const requests = response.results.map((p: any) => this.http.get(p.url));
      forkJoin(requests).subscribe((details:any) => {
        this.pokemon.set(details);
        this.pokemonFiltrados.set(details);
      });
    });
  }

  getTipoPrimario(pokemon: any): string {
    const tipo = pokemon.types.find((t: any) => t.slot === 1);
    return tipo?.type?.name ?? 'Desconocido';
  }

  getTipoSecundario(pokemon: any): string {
    const tipo = pokemon.types.find((t: any) => t.slot === 2);
    return tipo?.type?.name ?? '—';
  }

  getColorClase(pokemon: any): string {
    const tipo = this.getTipoPrimario(pokemon);
    return tipo ? tipo.toLowerCase() : '';
  }

  mostrarDetalle(pokemon: any) {
    this.pokemonSeleccionado = pokemon;
  }

  cerrarModal() {
    this.pokemonSeleccionado = null;
  }

  filtrarPokemons() {
    const nombre = this.filtroNombre.toLowerCase();
    const filtrados = this.pokemon().filter(p => p.name.toLowerCase().includes(nombre));
    this.pokemonFiltrados.set(filtrados);
  }
}
