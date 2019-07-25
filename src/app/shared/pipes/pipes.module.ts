import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { ConditionPipe } from './condition-pipe/condition.pipe';
import { ListingTypePipe } from './listing-type-tipe/listing-type.pipe';

// Own pipes

@NgModule({
  declarations: [
    ConditionPipe,
    ListingTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConditionPipe,
    ListingTypePipe
  ]
})
export class PipesModule { }
