import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipe-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css']
})
export class RecipeModalComponent {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RecipeModalComponent>) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  submitRecipe() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value); // Process the form data
      this.dialogRef.close();
    }
  }
}
