import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule,
  MatCheckboxModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class ThirdPartyComponentsModule { }
