import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet,RouterLink, ReactiveFormsModule, ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginform: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  http = inject(HttpClient);
  constructor(private router: Router) {}


 onLogin() {
  const fromValue = this.loginform.value;
  this.http.post<{ access_token: string }>(
    "https://api.escuelajs.co/api/v1/auth/login", 
    fromValue
  ).subscribe({
    next: (response) => {
      localStorage.setItem('access_token', response.access_token);
      this.http.get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${response.access_token}` }
      }).subscribe({
        next: (user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['pokemon']);
        },
        error: (error) => {
          alert("Error al cargar el perfil del usuario");
        }
      });
    },
    error: (error) => {
      alert('Credenciales incorrectas');
    }
  });
}
}
