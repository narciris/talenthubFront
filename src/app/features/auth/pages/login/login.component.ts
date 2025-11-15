import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit { 

  loginForm!: FormGroup
  fb = inject(FormBuilder);

  public constructor (
    private authService:AuthService,
    private router:Router
  ){

  }

  initForm(){
    this.loginForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  onSubmit(){
    if(this.loginForm.invalid){
      console.error("Campos invalidos o incompletos");
      return;
    }

    const value = this.loginForm.value;
    this.authService.login(value).subscribe({
      next: (response) => {
        this.authService.setToken(
          response.data.token
        );
        this.router.navigate(['/foro']);
      }
    })
  }
  passwordVisible = false;

  ngOnInit(): void {
    this.initForm();
    // Usar setTimeout para asegurar que el DOM esté listo
    setTimeout(() => {
      this.createParticles();
    }, 100);
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  createParticles(): void {
    const container = document.getElementById('particles-container');
    if (container) {
      // Limpiar partículas existentes
      container.innerHTML = '';
      
      const particleCount = 15;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        container.appendChild(particle);
      }
    }
  }
}
