import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { MatSelectModule } from '@angular/material/select';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';

// import {
//   MatButtonModule, MatCheckboxModule,
//   MatFormFieldModule, MatInputModule,
//   MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule, MatGridListModule, MatCardModule, MatRadioModule
//   , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule,
// MatSnackBarModule, MatDialogModule, MatMenuModule,
//   MatDividerModule, MatSlideToggleModule, MatListModule
// } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatSelectModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatIconModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule { }
