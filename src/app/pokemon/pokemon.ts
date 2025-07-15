import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Paginacion } from "../paginacion/paginacion";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css'],
  imports: [MatInputModule, CommonModule, FormsModule, Paginacion, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatLabel, MatFormFieldModule, RouterOutlet]
})
export class Pokemon implements OnInit {

  
  pokemon = signal<any[]>([]);
  pokemonFiltrados = signal<any[]>([]);
  filtroNombre = '';
  pokemonSeleccionado: any = null;

  paginaActual = signal(0);
 itemsPorPagina = signal(50);

  user = signal<any>({
    name: '',
    email: '',
    role: '',
    photoUrl: ''
  });
  router: any;
 

get pokemonPaginados() {
  const inicio = this.paginaActual() * this.itemsPorPagina();
  const fin = inicio + this.itemsPorPagina();
  return this.pokemonFiltrados().slice(inicio, fin);
}

  actualizarPaginacion(event: any) {
  this.paginaActual.set(event.pageIndex);
  this.itemsPorPagina.set(event.pageSize);
}

  constructor(private http: HttpClient) {}

  ngOnInit() {
const userGuardado = localStorage.getItem('user');
  if (userGuardado && userGuardado !== 'undefined' && userGuardado !== 'null') {
    try {
      const userObj = JSON.parse(userGuardado);
      this.user.set({
        name: userObj.name || '',
        email: userObj.email || '',
        role: userObj.role || '',
        photoUrl: userObj.avatar || 'https://via.placeholder.com/100'
      });
    } catch (e) {
      console.error('Error al parsear el usuario:', e);
      localStorage.removeItem('user');
      this.user.set({
        name: '',
        email: '',
        role: '',
        photoUrl: 'https://via.placeholder.com/100'
      });
    }
  } else {
    console.warn('No se encontró usuario en localStorage');
    this.user.set({
      name: '',
      email: '',
      role: '',
      photoUrl: 'https://via.placeholder.com/100'
    });
  }


    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1025').subscribe(response => {
      const requests = response.results.map((p: any) => this.http.get(p.url));
      forkJoin(requests).subscribe((details:any) => {
        this.pokemon.set(details);
        this.pokemonFiltrados.set(details);
      });
    });
  }

  cerrarSesion() {
  localStorage.removeItem('user');
  localStorage.removeItem('access_token');
  this.router.navigate(['login']);
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
  this.paginaActual.set(0);
  }

  limpiarFiltro() {
  this.filtroNombre = '';
  this.filtrarPokemons();
}

agregarPokemon() {
  const nuevoPokemon = {
    id: Date.now(),
    name: 'Nuevo Pokémon',
    types: [{ slot: 1, type: { name: 'normal' } }],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png' }
  };

  const actuales = this.pokemon();
  this.pokemon.set([nuevoPokemon, ...actuales]);

  const filtrados = this.pokemonFiltrados();
  this.pokemonFiltrados.set([nuevoPokemon, ...filtrados]);
}

eliminarPokemon() {
  const actuales = this.pokemon();
  if (actuales.length === 0) return;

  const nuevos = actuales.slice(1);
  this.pokemon.set(nuevos);

  const filtrados = this.pokemonFiltrados();
  this.pokemonFiltrados.set(filtrados.filter(p => p.id !== actuales[0].id));
}

obtenerNivelEvolucion(pokemon: any): string | null {
  return null;
}

obtenerGeneracion(pokemon: any): string | null {
  if (pokemon.id <= 151) return 'Generación 1';
  if (pokemon.id <= 251) return 'Generación 2';
  if (pokemon.id <= 386) return 'Generación 3';
  if (pokemon.id <= 493) return 'Generación 4';
  if (pokemon.id <= 649) return 'Generación 5';
  if (pokemon.id <= 721) return 'Generación 6';
  if (pokemon.id <= 809) return 'Generación 7';
  if (pokemon.id <= 905) return 'Generación 8';
  return 'Generación desconocida';
}

obtenerJuegos(pokemon: any): string[] {
  if (!pokemon.game_indices) return [];
  return pokemon.game_indices.map((gi: any) => gi.version.name);
}

getMovimientos(pokemon: any): any[] {
  if (!pokemon || !pokemon.moves) return [];
  return pokemon.moves;
}

mostrarAgregar = false;
mostrarEliminar = false;

nuevoPokemon = { name: '', height: 0, weight: 0 };
nombreEliminar = '';

mostrarFormularioAgregar() {
  this.mostrarAgregar = true;
  this.mostrarEliminar = false;
}

mostrarFormularioEliminar() {
  this.mostrarEliminar = true;
  this.mostrarAgregar = false;
}

cancelarAgregar() {
  this.mostrarAgregar = false;
  this.nuevoPokemon = { name: '', height: 0, weight: 0 };
}

cancelarEliminar() {
  this.mostrarEliminar = false;
  this.nombreEliminar = '';
}

agregarPokemonConfirmado() {
  if (this.nuevoPokemon.name.trim() !== '') {
    const nuevo = {
      id: this.pokemon().length + 1,
      name: this.nuevoPokemon.name,
      height: this.nuevoPokemon.height,
      weight: this.nuevoPokemon.weight,
      types: [],
      abilities: [],
      stats: [],
      sprites: { front_default: 'https://via.placeholder.com/100' }
    };
    this.pokemon.update(arr => [...arr, nuevo]);
    this.pokemonFiltrados.update(arr => [...arr, nuevo]);
    this.cancelarAgregar();
  }
}

eliminarPokemonConfirmado() {
  if (this.nombreEliminar.trim() !== '') {
    const nombre = this.nombreEliminar.toLowerCase();
    this.pokemon.update(arr => arr.filter(p => p.name.toLowerCase() !== nombre));
    this.pokemonFiltrados.update(arr => arr.filter(p => p.name.toLowerCase() !== nombre));
    this.cancelarEliminar();
  }
}



}
