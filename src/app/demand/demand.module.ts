import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DemandListComponent, DemandDetailComponent]
})
export class DemandModule { }
