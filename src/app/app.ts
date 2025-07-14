import { Component, inject } from '@angular/core';
import { Router,  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Login-Angular';

 
}
