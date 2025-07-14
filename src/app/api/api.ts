import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.html',
  styleUrl: './api.css'
})
export class Api implements OnInit{

  http = inject(HttpClient);
  listaUsuarios: any[] = [];

  ngOnInit(): void {
    debugger
    this.getUsuarios();
  }


  getUsuarios() {
    debugger;
    this.http.get("https://dummyjson.com/users").subscribe((result:any) => {
      debugger;
      this.listaUsuarios = result.users;
    })
  }
}
