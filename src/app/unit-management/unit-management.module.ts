import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitManagementRoutingModule } from './unit-management-routing.module';
import { UnitManagementComponent } from './unit-management/unit-management.component';


@NgModule({
  declarations: [UnitManagementComponent],
  imports: [
    CommonModule,
    UnitManagementRoutingModule
  ]
})
export class UnitManagementModule { }
