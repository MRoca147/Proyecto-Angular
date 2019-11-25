import { Component, OnInit } from '@angular/core';
import { AllTeamsService } from 'src/app/services/all-teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  events: any[] = [];
  team: any[] = [];
  constructor(protected AllTeamsService: AllTeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.AllTeamsService.getOneTeam(this.route.snapshot.paramMap.get("Team"))
    .subscribe(
      (data) => { // Success
        this.team = data['teams'][0];
      },
      (error) => {
        console.error(error);
      }
    );

    this.AllTeamsService.getAllEvents()
    .subscribe(
      (data) => { // Success
        this.events = data['events'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
