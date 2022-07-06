import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialComponents = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatMenuModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDividerModule,
  MatTabsModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [
    materialComponents,
  ],
  exports: [
    materialComponents,
  ]
})
export class MaterialModule { }
