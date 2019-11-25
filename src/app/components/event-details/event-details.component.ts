import { Component, OnInit } from '@angular/core';
import { AllTeamsService } from 'src/app/services/all-teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  team: [];
  event: any[] = [];

  constructor(protected AllTeamsService: AllTeamsService, private route: ActivatedRoute) { }

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

    this.AllTeamsService.getOneEvent(this.route.snapshot.params.id)
    .subscribe(
      (data) => { // Success
        this.event = data['events'][0];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
