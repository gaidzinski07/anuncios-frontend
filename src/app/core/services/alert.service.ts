import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) {
  }

  public openSnackBar(message: string, keep: boolean = false, error?: boolean) {
    this.snackBar.open(message, 'Fechar', {
      duration: keep ? undefined : 4000,
      panelClass: ['anuncios-snackbar', error ? 'error' : 'success']
    });
  }

}
