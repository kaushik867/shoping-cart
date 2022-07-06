import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackbar(message: string, dismiss: string) {
    this.snackBar.open(message, dismiss, {duration: 2000});
  }
}
