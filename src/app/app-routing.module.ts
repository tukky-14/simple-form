import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 利用したいコンポーネントをインポートして参照できるようにする
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BetterFormComponent } from './better-form/better-form.component';
import { ControlsComponent } from './controls/controls.component';

const routes: Routes = [];

@NgModule({
  // URLパスとモジュールをforRootメソッドで関連づける
  imports: [RouterModule.forRoot([
    {path:'', redirectTo: '/simple-form', pathMatch: 'full'},
    {path: 'simple-form', component:SimpleFormComponent },
    {path: 'better-form', component:BetterFormComponent },
    {path: 'controls', component:ControlsComponent }
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
