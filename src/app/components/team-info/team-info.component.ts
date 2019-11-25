import { Component, OnInit } from '@angular/core';
import { AllTeamsService } from 'src/app/services/all-teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  team: any[] = [];
  players: any [] = [];
  nEvents: any [] = [];
  lEvents: any [] = [];
  table: any [] = [];
  constructor(protected AllTeamsService: AllTeamsService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    
    this.AllTeamsService.getOneTeam(this.route.snapshot.params.Team)
    .subscribe(
      (data) => { // Success
        this.team = data['teams'][0];
      },
      (error) => {
        console.error(error);
      }
    );

    this.AllTeamsService.getPlayersTeam(this.route.snapshot.params.Team)
    .subscribe(
      (data) => { // Success
        this.players = data['player'];
      },
      (error) => {
        console.error(error);
      }
    );

    this.AllTeamsService.get5NextEvents(this.route.snapshot.params.Team)
    .subscribe(
      (data) => { // Success
        this.nEvents = data['events'];
      },
      (error) => {
        console.error(error);
      }
    );

    this.AllTeamsService.get5LastEvents(this.route.snapshot.params.Team)
    .subscribe(
      (data) => { // Success
        this.lEvents = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );

    this.AllTeamsService.getTable()
    .subscribe(
      (data) => { // Success
        this.table = data['table'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
