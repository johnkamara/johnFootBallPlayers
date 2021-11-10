import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';

import { NewPlayerComponent } from './new-player/new-player.component';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'list-players', component: ListPlayersComponent },
  { path: 'new-player', component: NewPlayerComponent },
  { path: 'not-found', component:, data: {message: 'unSuccessful!'} },
  { path: '**', redirectTo: '/not-found' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
