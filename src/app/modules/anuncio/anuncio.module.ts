import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuncioListarComponent } from './anuncio-listar/anuncio-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioCadastrarComponent } from './anuncio-cadastrar/anuncio-cadastrar.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AnuncioListarComponent,
    AnuncioCadastrarComponent
  ],
  imports: [
    CommonModule,
    AnuncioRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule
  ]
})
export class AnuncioModule { }
