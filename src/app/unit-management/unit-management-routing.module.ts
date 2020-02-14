import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitManagementComponent } from './unit-management/unit-management.component';


const routes: Routes = [
  {
    path: "",
    component: UnitManagementComponent
  },
  {
    path:"unit",
    component:UnitManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitManagementRoutingModule { }
