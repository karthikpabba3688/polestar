import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
    
  },
  {
    path: "unit",
    loadChildren: "./unit-management/unit-management.module#UnitManagementModule"
  },
  {
    path: "report",
    loadChildren: "./reports/reports.module#ReportsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
