import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms'; // For reactive forms
import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    MatSidenavModule, 
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reciphub';
  isOpen = false;

  constructor(public dialog: MatDialog) {}

  openRecipeModal() {
    this.dialog.open(RecipeModalComponent, {
      width: '80%', // Adjust as needed
      height: 'auto'
    });
  }

  toggleState(isOpen: boolean) {
    this.isOpen = isOpen;
  }


  
}
