import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [
    UsuarioCadastroComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class UsuarioModule { }
