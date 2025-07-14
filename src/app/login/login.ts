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
    debugger;
    const fromValue = this.loginform.value;
    this.http.post<{ access_token: string }>("https://api.escuelajs.co/api/v1/auth/login",fromValue).subscribe({
      next:(response)=>{
        debugger;
        console.log('Token recibido:', response.access_token);
      alert('Inicio de sesión exitoso');
      this.router.navigate(['pokemon']);
    },
    error: (error) => {
      console.error('Error en login:', error);
      alert('Correo o contraseña incorrectos');
    }
    })
  }
}
