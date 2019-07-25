import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchInputFormComponent } from './search-input-form/search-input-form.component';

@NgModule({
  declarations: [
    SearchInputFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchInputFormComponent
  ]
})
export class FormsNbmModule { }
