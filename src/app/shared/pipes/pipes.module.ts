import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { ConditionPipe } from './condition-pipe/condition.pipe';
import { ListingTypePipe } from './listing-type-tipe/listing-type.pipe';
import { SitesPipe } from './sites-pipe/sites.pipe';

@NgModule({
  declarations: [
    ConditionPipe,
    ListingTypePipe,
    SitesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConditionPipe,
    ListingTypePipe,
    SitesPipe
  ]
})
export class PipesModule { }
