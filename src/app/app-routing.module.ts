import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Home',
  },

  {
    path: 'Home',
    component: PrincipalComponent
  },

  {
    path: 'Home/:Team',
    component: TeamInfoComponent
  },

  {
    path: 'Home/:Team/:Player',
    component: PlayerInfoComponent
  },

  {
    path: 'Home/:Team/All/Events',
    component: AllEventsComponent
  },

  {
    path: 'Home/:Team/:id/EventDetails',
    component: EventDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
