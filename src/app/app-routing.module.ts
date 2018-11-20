import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MathGamesComponent } from './math-games/math-games.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {name: 'Jami Angular App'}},
  {path: 'math', component: MathGamesComponent, data: {name: 'Math Games'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
