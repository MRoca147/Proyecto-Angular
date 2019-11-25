import { Component, OnInit } from '@angular/core';
import { AllTeamsService } from 'src/app/services/all-teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  player: any[] = [];
  constructor(protected AllTeamsService: AllTeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.AllTeamsService.getPlayer(this.route.snapshot.params.Player)
    .subscribe(
      (data) => { // Success
        this.player = data['players'][0];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
